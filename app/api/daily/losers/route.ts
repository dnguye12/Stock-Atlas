export const runtime = "nodejs"

import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

export async function GET() {
    try {
        const result = await yahooFinance.screener({ scrIds: 'day_losers', count: 5, region: 'US', lang: 'en-US' });

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