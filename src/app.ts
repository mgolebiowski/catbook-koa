import Koa from "koa";

import json from "koa-json";
import logger from "koa-logger";
import cors from "@koa/cors";

import { initRouting } from "./routes";

export function initApp() {
  const app = new Koa();

  const router = initRouting();

  app.use(cors());
  app.use(json());
  app.use(logger());

  app.use(router.routes()).use(router.allowedMethods());

  return app;
}
