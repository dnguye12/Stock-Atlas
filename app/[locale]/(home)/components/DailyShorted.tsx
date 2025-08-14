"use client"

import { useEffect, useState } from "react";
import DailySkeleton from "./DailySkeleton";
import { ArrowDownNarrowWideIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { currToSymbol, formatMarketCap } from "@/utils/moneyUtils";
import { truncateText } from "@/utils/textUtils";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const DailyShorted = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [shorts, setShorts] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const t = useTranslations("Home.Tables")

    useEffect(() => {
        if (isLoading) {
            const fetchGainers = async () => {
                try {
                    const result = await fetch("/api/screener?scrIds=most_actives&count=5")
                    const data = await result.json()
                    setShorts(data)
                } catch (error) {
                    console.log(error)
                    setShorts(null)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchGainers()
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <DailySkeleton Icon={ArrowDownNarrowWideIcon} type="daily_shorted" />
        )
    }

    const handleClick = (symbol: string) => {
        router.push(`/stock/${symbol}`)
    }

    return (
        <div className="highlight-block">
            <div className="highlight-header">
                <h3 className="inline-flex gap-x-2 items-center">
                    <ArrowDownNarrowWideIcon className=" !stroke-2" />
                    <span>{t("most")} <span className=" font-bol">{t("shorted")}</span> {t("today")}</span>
                </h3>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t("symbol")}</TableHead>
                        <TableHead className="hidden md:table-cell">{t("name")}</TableHead>
                        <TableHead>{t("market cap")}</TableHead>
                        <TableHead>{t("today")}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        shorts.quotes.map((quote: any, idx: number) => (
                            <TableRow onClick={() => handleClick(quote.symbol)} key={`daily-gainer-${idx}`} className="cursor-pointer">
                                <TableCell className="symbol">
                                    <p>{quote.symbol}</p>
                                    <p className="block md:hidden text-muted-foreground font-normal truncate">{quote.displayName ? truncateText(quote.displayName, 10) : truncateText(quote.shortName, 10)}</p>
                                </TableCell>
                                <TableCell className="name">
                                    <span className=" truncate">
                                        {quote.displayName ? truncateText(quote.displayName) : truncateText(quote.shortName)}
                                    </span>
                                </TableCell>
                                <TableCell>{formatMarketCap(quote.marketCap, quote.currency)}</TableCell>
                                <TableCell>
                                    <p className="price">{currToSymbol(quote.currency)}{quote.regularMarketPrice.toFixed(2)}</p>
                                    {
                                        quote.regularMarketChangePercent < 0
                                            ?
                                            (
                                                <p className="inline-flex items-center text-down change">
                                                    <ChevronDownIcon className=" !stroke-2" />
                                                    {Math.abs(quote.regularMarketChangePercent.toFixed(2))}%
                                                </p>
                                            )
                                            :
                                            (
                                                <p className="inline-flex items-center text-up change">
                                                    <ChevronUpIcon className=" !stroke-2" />
                                                    {quote.regularMarketChangePercent.toFixed(2)}%
                                                </p>
                                            )
                                    }

                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default DailyShorted;