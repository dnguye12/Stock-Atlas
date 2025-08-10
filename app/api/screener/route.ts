import { NextRequest, NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

const ALLOWED_SCR_IDS = [
    "aggressive_small_caps",
    "conservative_foreign_funds",
    "day_gainers",
    "day_losers",
    "growth_technology_stocks",
    "high_yield_bond",
    "most_actives",
    "most_shorted_stocks",
    "portfolio_anchors",
    "small_cap_gainers",
    "solid_large_growth_funds",
    "solid_midcap_growth_funds",
    "top_mutual_funds",
    "undervalued_growth_stocks",
    "undervalued_large_caps",
] as const

type ScrId = (typeof ALLOWED_SCR_IDS)[number]

const isScrId = (value: string): value is ScrId => {
    return (ALLOWED_SCR_IDS as readonly string[]).includes(value)
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams

        const rawScrIds: string | null = searchParams.get("scrIds")
        const rawCount: string | null = searchParams.get("count")
        const count: number = rawCount === null ? 5 : Number(rawCount)
        const region: string = searchParams.get("region") ?? "US"

        if (!rawScrIds || !isScrId(rawScrIds)) {
            return NextResponse.json(
                { error: "Missing required query param scrIds" },
                { status: 400 }
            )
        }

        const result = await yahooFinance.screener({
            scrIds: rawScrIds,
            count,
            region,
            lang: 'en-US'
        })

        return NextResponse.json(result)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error instanceof yahooFinance.errors.FailedYahooValidationError) {
            return NextResponse.json(error.result, { status: 200 });
        } else {
            console.log(error)
            return new NextResponse("Internal Error", { status: 500 });
        }

    }
}