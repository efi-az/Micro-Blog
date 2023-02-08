import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { AuditableEntity } from "@project/api/core";
import { UserDomain } from "../../../Domain/User/user.domain";

@Entity('user')
export class UserEntity extends AuditableEntity implements UserDomain {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string;

    @Column()
    password: string;

}