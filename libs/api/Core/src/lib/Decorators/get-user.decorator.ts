import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { JwtTokenInfo } from "@project/api/user";

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtTokenInfo => {
    const req = ctx.switchToHttp().getRequest();
    const user: JwtTokenInfo = req.user;
    return user;
  }
);