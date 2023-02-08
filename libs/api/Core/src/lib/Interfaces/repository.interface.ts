import { QueryRunner } from "typeorm";

export interface IQueryRepository<Entity, Key> {
  findOneEntity(entityId: Key): Promise<Entity>
  findAllEntities(): Promise<Entity[]>
}

export interface ICommandRepository<Entity, CreateEntityDto, Key> {
  createEntity(createEntityDto: CreateEntityDto, queryRunner?: QueryRunner): Promise<Entity>
  deleteEntity(entityId: Key, queryRunner?: QueryRunner): Promise<any>
  updateEntity(updateEntity: Entity, queryRunner?: QueryRunner): Promise<Entity>
}