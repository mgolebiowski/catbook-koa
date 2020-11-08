import { CatFetcher } from './fetcher';

import Koa from 'koa';

export async function get(ctx: Koa.Context, next: Koa.Next) {
    const catFetcher = new CatFetcher(process.env.API_KEY || 'fake-key');
    console.log('getting...');

    ctx.body = await catFetcher.getRandomCat();

    await next();
}