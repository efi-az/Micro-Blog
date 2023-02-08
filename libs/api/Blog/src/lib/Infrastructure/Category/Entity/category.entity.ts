import { BlogEntity } from '@project/api/blog';
import { AuditableEntity } from '@project/api/core';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CategoryDomain } from '../../../Domain/category/category.domain';

@Entity('category')
export class CategoryEntity extends AuditableEntity implements CategoryDomain {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => BlogEntity, blog => blog.objCategory, { nullable: true })
    objBlogs: BlogEntity[]
}