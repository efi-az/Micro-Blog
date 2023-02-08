import { UserImplement } from './../../../../Domain/User/user';
import { Inject, BadRequestException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BaseTransaction, POSTGRES_CONST } from "@project/api/core";
import { JwtService } from "@nestjs/jwt";
import { UserQueryRepository } from '../../../../Infrastructure/User/Repository/Queries/user-query.repository';
import { LoginUserQuery } from './login-user.query';
import { LoginUserDto } from '../../../../Domain/User/Dtos/login-user.dto';

@QueryHandler(LoginUserQuery)
export class LoginUserHandler extends BaseTransaction<LoginUserDto, string> implements IQueryHandler<LoginUserQuery, string> {
  constructor(
    @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
    private userRep: UserQueryRepository,
    private jwtService: JwtService,
  ) {
    super(postgresDataSource)
  }

  execute(command: LoginUserQuery): Promise<string> {
    return this.run(command.loginUserDto)
  }

  async executeTransaction(data: LoginUserDto): Promise<string> {
    const findUser = await this.userRep.findOneByUsername(data.username)
    if (!findUser) throw new BadRequestException('User Not Found')

    const user = new UserImplement(findUser)
    await user.validatePassword(data.password)

    return this.generateToken(findUser.id)
  }

  generateToken(userId: string) {
    const payload = { uid: userId }
    const generate = this.jwtService.sign(payload, { expiresIn: "2h" })
    return generate
  }


}