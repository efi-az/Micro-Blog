import { Inject } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { BaseTransaction, POSTGRES_CONST } from "@project/api/core";
import { CreateUserCommand } from './create-user.command';
import { CreateUserDto } from '../../../../Domain/User/Dtos/create-user.dto';
import { UserEntity } from '../../../../Infrastructure/User/Entity/user.entity';
import { UserCommandRepository } from '../../../../Infrastructure/User/Repository/Commands/user-command.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler extends BaseTransaction<CreateUserDto, UserEntity> implements ICommandHandler<CreateUserCommand, UserEntity> {
    constructor(
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
        private userRep: UserCommandRepository,
        private publisher: EventPublisher,
    ) {
        super(postgresDataSource)
    }

    execute(command: CreateUserCommand): Promise<UserEntity> {
        return this.run(command.createUserDto)
    }

    executeTransaction(data: CreateUserDto, queryRunner: QueryRunner): Promise<UserEntity> {
        return this.userRep.createEntity(data, queryRunner);
    }


}