import { UpdateDateColumn, CreateDateColumn, BaseEntity, DeleteDateColumn, VersionColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class AuditableEntity extends BaseEntity {
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

}