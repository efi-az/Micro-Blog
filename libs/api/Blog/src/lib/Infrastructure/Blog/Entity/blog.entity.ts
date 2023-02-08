import { CategoryEntity } from '../../Category/Entity/category.entity';
import { AuditableEntity } from '@project/api/core';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BlogDomain } from '../../../Domain/blog/blog.domain';

@Entity('blog')
export class BlogEntity extends AuditableEntity implements BlogDomain {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    content: string

    @Column({ type: 'text', array: true, nullable: true, default: [] })
    tags: string[]

    @Column()
    summary: string

    @Column()
    slug: string

    @Column({ type: 'boolean', default: false })
    isLock: boolean

    @ManyToOne(() => CategoryEntity, category => category.objBlogs)
    objCategory: CategoryEntity
}