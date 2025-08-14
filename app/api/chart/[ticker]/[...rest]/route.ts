import { NextRequest, NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

type Params = {
    params: {
        ticker: string;
        rest?: string[]
    }
}

type QueryOptions = {
    events?: string | undefined;
    period2?: string | number | Date | undefined;
    interval?: "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo" | undefined;
    includePrePost?: boolean | undefined;
    period1: string | number | Date;
}

const validIntervals = [
    "1m", "2m", "5m", "15m", "30m",
    "60m", "90m", "1h", "1d", "5d",
    "1wk", "1mo", "3mo"
] as const

type Interval = typeof validIntervals[number]

const isValidInterval = (value: string): value is Interval => {
    return validIntervals.includes(value as Interval)
}

export async function GET(request: NextRequest, { params }: Params) {
    try {
        const { ticker, rest = [] } = await params
        const [period1, period2, intervals] = rest

        if (!ticker) {
            return NextResponse.json({ error: 'ticker is required' }, { status: 400 })
        }

        if (!period1) {
            return NextResponse.json({ error: 'period1 is required' }, { status: 400 })
        }

        const queryOptions: QueryOptions = { period1 }
        if (period2) {
            queryOptions.period2 = period2
        }
        if (intervals && isValidInterval(intervals)) {
            queryOptions.interval = intervals
        }

        const result = await yahooFinance.chart(ticker, queryOptions)

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