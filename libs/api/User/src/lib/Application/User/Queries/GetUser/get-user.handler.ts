import { UserEntity } from './../../../../Infrastructure/User/Entity/user.entity';
import { UserQueryRepository } from './../../../../Infrastructure/User/Repository/Queries/user-query.repository';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { POSTGRES_CONST } from '@project/api/core';
import { DataSource } from 'typeorm';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(
        private userQueryRepository: UserQueryRepository,
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource
    ) { }

    execute(query: GetUserQuery): Promise<UserEntity> {
        return this.userQueryRepository.findOneEntity(query.userToken.uid)
    }

}
