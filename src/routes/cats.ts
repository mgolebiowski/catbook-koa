import { CatFetcher } from "../services/fetcher";

import Koa from "koa";

export async function get(ctx: Koa.Context, next: Koa.Next) {
  const catFetcher = new CatFetcher(process.env.API_KEY || "fake-key");

  ctx.body = await catFetcher.getRandomCat();

  await next();
}
