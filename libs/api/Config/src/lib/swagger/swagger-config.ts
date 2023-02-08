import { registerAs } from "@nestjs/config";

export default registerAs("swagger", () => ({
  title: process.env.SWAGGER_TITLE,
  description: process.env.SWAGGER_DESCRIPTION,
  prefix: process.env.SWAGGER_PREFIX,
  version: process.env.SWAGGER_VERSION,
  tag: process.env.SWAGGER_TAG
}))