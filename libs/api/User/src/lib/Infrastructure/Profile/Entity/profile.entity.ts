import { ProfileDomain } from './../../../Domain/Profile/profile.domain';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { AuditableEntity } from "@project/api/core";

@Entity('profile')
export class ProfileEntity extends AuditableEntity implements ProfileDomain {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;
    
    @Column()
    phone: string;
    
    @Column()
    email: string;
    
    @Column()
    twitter: string;
    
    @Column()
    linkedin: string;

}