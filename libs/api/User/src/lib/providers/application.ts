import { JwtStrategy } from './../../../../Core/src/lib/Strategies/jwt.strategy';
import { CreateUserHandler } from "../Application/User/Commands/CreateUser/create-user.handler";
import { GetUserHandler } from "../Application/User/Queries/GetUser/get-user.handler";
import { LoginUserHandler } from "../Application/User/Queries/LoginUser/login-user.handler";

export const UserApplicationProviders: any[] = [
    CreateUserHandler, GetUserHandler, LoginUserHandler, JwtStrategy
]