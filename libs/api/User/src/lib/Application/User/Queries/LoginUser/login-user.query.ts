import { IQuery } from "@nestjs/cqrs";
import { LoginUserDto } from "../../../../Domain/User/Dtos/login-user.dto";

export class LoginUserQuery implements IQuery {
    constructor(
        public readonly loginUserDto: LoginUserDto,
    ) { }
}