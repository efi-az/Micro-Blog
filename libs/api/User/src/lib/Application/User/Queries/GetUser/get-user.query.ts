import { IQuery } from "@nestjs/cqrs";
import { JwtTokenInfo } from "../../../../Domain/User/Dtos/jwt-token.info";

export class GetUserQuery implements IQuery {
    constructor(
        public readonly userToken: JwtTokenInfo
    ) {}
}