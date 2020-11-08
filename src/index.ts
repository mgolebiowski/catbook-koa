import Koa from "koa";
import Router from "koa-router";

import json from "koa-json";
import logger from "koa-logger";

import dotenv from 'dotenv';

import { get } from './cats';

dotenv.config();

const app = new Koa();
const router = new Router();

router.get("/random_cat", get);

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 3000);