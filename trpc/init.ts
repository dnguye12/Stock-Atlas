import { auth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
import { cache } from 'react';
import superjson from 'superjson';

export const createTRPCContext = cache(async () => {
    return { auth: await auth() }
})

export type Context = Awaited<ReturnType<typeof createTRPCContext>>

const trpc = initTRPC.context<Context>().create({
    transformer: superjson
})

const isAuthed = trpc.middleware(({ next, ctx }) => {
    if (!ctx.auth.userId) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Not authenticated"
        })
    }

    return next({
        ctx: {
            auth: ctx.auth
        }
    })
})

export const createTRPCRouter = trpc.router
export const createCallerFactory = trpc.createCallerFactory;
export const baseProcedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(isAuthed)