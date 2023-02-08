import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  port: process.env.APP_PORT,
  apiGlobalPrefix: process.env.API_GLOBAL_PREFIX,
  mode: process.env.APP_MODE,
  env: process.env.NODE_ENV
}));