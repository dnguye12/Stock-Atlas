"use client"

import { useEffect, useState } from "react";
import { currToSymbol, formatMarketCap } from "@/utils/moneyUtils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronUpIcon, CrownIcon } from "lucide-react";
import { truncateText } from "@/utils/textUtils";
import DailySkeleton from "./DailySkeleton";
import { useRouter } from "next/navigation";

const DailyGainers = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [gainers, setGainers] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (isLoading) {
            const fetchGainers = async () => {
                try {
                    const result = await fetch("/api/screener?scrIds=day_gainers&count=5")
                    const data = await result.json()
                    setGainers(data)
                } catch (error) {
                    console.log(error)
                    setGainers(null)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchGainers()
        }
    }, [isLoading])

    if (isLoading) {
        return (<DailySkeleton Icon={CrownIcon} type="daily_gainers" />)
    }

    const handleClick = (symbol: string) => {
        router.push(`/stock/${symbol}`)
    }

    return (
        <div className="highlight-block">
            <div className="highlight-header">
                <h3 className="inline-flex gap-x-2 items-center">
                    <CrownIcon className=" !stroke-2" />
                    <span>Top <span className=" font-bold text-up">Gainers</span> Today</span>
                </h3>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>Today</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        gainers.quotes.map((quote: any, idx: number) => (
                            <TableRow onClick={() => handleClick(quote.symbol)} key={`daily-gainer-${idx}`} className="cursor-pointer">
                                <TableCell className="symbol">{quote.symbol}</TableCell>
                                <TableCell className="name">
                                    <span className=" truncate">
                                        {quote.displayName ? truncateText(quote.displayName) : truncateText(quote.shortName)}
                                    </span>
                                </TableCell>
                                <TableCell>{formatMarketCap(quote.marketCap, quote.currency)}</TableCell>
                                <TableCell>
                                    <p className="price">{currToSymbol(quote.currency)}{quote.regularMarketPrice.toFixed(2)}</p>
                                    <p className="inline-flex items-center text-up change">
                                        <ChevronUpIcon className=" !stroke-2" />
                                        {quote.regularMarketChangePercent.toFixed(2)}%
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default DailyGainers;