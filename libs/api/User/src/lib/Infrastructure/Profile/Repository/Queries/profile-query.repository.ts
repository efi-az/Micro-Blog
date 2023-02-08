import { IQueryRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { ProfileEntity } from '../../Entity/profile.entity';

@Injectable()
export class ProfileQueryRepository extends Repository<ProfileEntity> implements IQueryRepository<ProfileEntity, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(ProfileEntity, dataSource.createEntityManager());
    }

    async findOneEntity(entityId: string): Promise<ProfileEntity> {
        const query = await this.createQueryBuilder("profile")
            .where("profile.id = :id", { id: entityId })
            .getOne()
        return query
    }

    async findAllEntities(): Promise<ProfileEntity[]> {
        const query = await this.createQueryBuilder("profile")
            .getMany()
        return query
    }
}