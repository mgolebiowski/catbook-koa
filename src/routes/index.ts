import Router from "koa-router";

import { get } from "./cats";

export function initRouting() {
  const router = new Router();

  router.get("/random_cat", get);

  return router;
}
