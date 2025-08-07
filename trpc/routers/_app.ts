import { createTRPCRouter } from '../init';
import { dailyStockRouter } from '@/controllers/stock/daily/procedure';
export const appRouter = createTRPCRouter({
    dailyStock: dailyStockRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;