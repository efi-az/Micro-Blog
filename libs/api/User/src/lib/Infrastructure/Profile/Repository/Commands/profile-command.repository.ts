import { ICommandRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, QueryRunner, Repository } from "typeorm";
import { ProfileEntity } from '../../Entity/profile.entity';
import { CreateProfileDto } from '../../../../Domain/Profile/Dtos/create-profile.dto';
import { ProfileDomain } from '../../../../Domain/Profile/profile.domain';

@Injectable()
export class ProfileCommandRepository extends Repository<ProfileEntity> implements ICommandRepository<ProfileEntity, CreateProfileDto, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(ProfileEntity, dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateProfileDto, queryRunner?: QueryRunner): Promise<ProfileEntity> {
        const createDto = new ProfileEntity()
        createDto.firstname = createEntityDto.firstname
        createDto.lastname = createEntityDto.lastname
        createDto.phone = createEntityDto.phone
        createDto.email = createEntityDto.email
        createDto.twitter = createEntityDto.twitter
        createDto.linkedin = createEntityDto.linkedin
        if (queryRunner) return await queryRunner.manager.save(createDto)
        return await this.save(await this.create(createDto))
    }

    deleteEntity(entityId: string, queryRunner?: QueryRunner): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async updateEntity(updateEntity: ProfileDomain, queryRunner?: QueryRunner): Promise<ProfileEntity> {
        if (queryRunner) return await queryRunner.manager.save(ProfileEntity, updateEntity)
        return await this.save(updateEntity)
    }

}