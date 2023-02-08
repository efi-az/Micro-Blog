import { IQueryRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserEntity } from '../../Entity/user.entity';

@Injectable()
export class UserQueryRepository extends Repository<UserEntity> implements IQueryRepository<UserEntity, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async findOneEntity(entityId: string): Promise<UserEntity> {
        const query = await this.createQueryBuilder("user")
            .where("user.id = :id", { id: entityId })
            .getOne()
        return query
    }

    async findAllEntities(): Promise<UserEntity[]> {
        const query = await this.createQueryBuilder("user")
            .getMany()
        return query
    }

    async findOneByUsername(username: string): Promise<UserEntity> {
        const query = await this.createQueryBuilder("user")
            .where("user.username = :username", { username })
            .getOne()
        return query
    }
}