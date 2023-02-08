import { ICommandRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, QueryRunner, Repository } from "typeorm";
import { UserEntity } from '../../Entity/user.entity';
import { CreateUserDto } from '../../../../Domain/User/Dtos/create-user.dto';
import { UserDomain } from '../../../../Domain/User/user.domain';

@Injectable()
export class UserCommandRepository extends Repository<UserEntity> implements ICommandRepository<UserEntity, CreateUserDto, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateUserDto, queryRunner?: QueryRunner): Promise<UserEntity> {
        const createDto = new UserEntity()
        createDto.username = createEntityDto.username
        createDto.password = createEntityDto.password
        if (queryRunner) return await queryRunner.manager.save(createDto)
        return await this.save(await this.create(createDto))
    }

    deleteEntity(entityId: string, queryRunner?: QueryRunner): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async updateEntity(updateEntity: UserDomain, queryRunner?: QueryRunner): Promise<UserEntity> {
        if (queryRunner) return await queryRunner.manager.save(UserEntity, updateEntity)
        return await this.save(updateEntity)
    }

}