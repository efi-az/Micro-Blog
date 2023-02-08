import { UserEntity } from './../../Infrastructure/User/Entity/user.entity';
import { ApiTags } from "@nestjs/swagger"
import { Controller, Post, Body, Get } from '@nestjs/common'
import { BaseController, GetUser, UseBearerAuth, UseJwtGuard } from "@project/api/core";
import { CreateUserDto } from "../../Domain/User/Dtos/create-user.dto";
import { CreateUserCommand } from "../../Application/User/Commands/CreateUser/create-user.command";
import { GetUserQuery } from '../../Application/User/Queries/GetUser/get-user.query';
import { LoginUserQuery } from '../../Application/User/Queries/LoginUser/login-user.query';
import { LoginUserDto } from '../../Domain/User/Dtos/login-user.dto';
import { JwtTokenInfo } from '../../Domain/User/Dtos/jwt-token.info';

@ApiTags("USER")
@Controller("user")
export class UserController extends BaseController {

    @Post("sign-up")
    create(@Body() createDto: CreateUserDto): Promise<UserEntity> {
        return this.commandBus.execute(new CreateUserCommand(createDto))
    }

    @Post("sign-in")
    login(@Body() loginDto: LoginUserDto): Promise<UserEntity> {
        return this.queryBus.execute(new LoginUserQuery(loginDto))
    }

    @UseJwtGuard()
    @UseBearerAuth()
    @Get()
    getAll(@GetUser() user: JwtTokenInfo): Promise<UserEntity> {
        return this.queryBus.execute(new GetUserQuery(user))
    }

}