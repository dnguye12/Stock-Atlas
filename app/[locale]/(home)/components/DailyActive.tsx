"use client"

import { useState, useEffect } from "react"
import { currToSymbol, formatMarketCap } from "@/utils/moneyUtils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartLineIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { truncateText } from "@/utils/textUtils";
import DailySkeleton from "./DailySkeleton";

const DailyActive = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [actives, setActives] = useState<any>(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isLoading) {
            const fetchGainers = async () => {
                try {
                    const result = await fetch("/api/screener?scrIds=most_actives&count=5")
                    const data = await result.json()
                    setActives(data)
                } catch (error) {
                    console.log(error)
                    setActives(null)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchGainers()
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <DailySkeleton Icon={ChartLineIcon} type="daily_active" />
        )
    }

    return (
        <div className="highlight-block">
            <div className="highlight-header">
                <h3 className="inline-flex gap-x-2 items-center">
                    <ChartLineIcon className=" !stroke-2" />
                    <span>Most <span className=" font-bol">Active</span> Today</span>
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
                        actives.quotes.map((quote: any, idx: number) => (
                            <TableRow key={`daily-gainer-${idx}`}>
                                <TableCell className="symbol">{quote.symbol}</TableCell>
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
    )
}

export default DailyActive;