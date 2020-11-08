import dotenv from 'dotenv';

import { initApp } from './app';

dotenv.config();

const app = initApp();

app.listen(process.env.PORT);