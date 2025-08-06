import { initTRPC } from '@trpc/server';
import { cache } from 'react';

export const createTRPCContext = cache(async () => {
    return { userId: 'user_123' }
})

const trpc = initTRPC.create({})

export const createTRPCRouter = trpc.router
export const createCallerFactory = trpc.createCallerFactory;
export const baseProcedure = trpc.procedure;