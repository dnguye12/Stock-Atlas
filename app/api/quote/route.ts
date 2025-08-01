import { NextResponse } from "next/server"
import yahooFinance from 'yahoo-finance2';

export async function GET() {
    try {
        const result = await yahooFinance.quote("AAPL")
        if (!result) {
            return new NextResponse("Invalid data", { status: 400 })
        }
        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}