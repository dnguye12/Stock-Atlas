import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import z from "zod";
import yahooFinance from "yahoo-finance2"
import { TRPCError } from "@trpc/server";

export const dailyStockRouter = createTRPCRouter({
    gainers: baseProcedure
        .input(
            z.object({
                count: z.number().default(30)
            })
        )
        .query(async ({ input }) => {
            const queryOptions = { count: input.count, region: 'US', lang: 'en-US' }

            try {
                const gainers = await yahooFinance.dailyGainers(queryOptions)

                return gainers
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                if (error instanceof yahooFinance.errors.FailedYahooValidationError) {
                    return error.result
                }
                if (error instanceof Error) {
                    console.log(error)
                    throw new TRPCError({
                        code: "BAD_REQUEST",
                        message: "Something went wrong"
                    })
                }
            }

        })
})