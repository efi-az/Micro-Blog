import { AggregateRoot } from "@nestjs/cqrs"
import { UserEntity } from "../../Infrastructure/User/Entity/user.entity"
import { UserDomain } from "./user.domain"
// import * as bcrypt from 'bcrypt'
import { ForbiddenException } from "@nestjs/common"

export class UserImplement extends AggregateRoot implements UserDomain {
    readonly username: string
    readonly password: string

    constructor(prop: UserEntity) {
        super()
        Object.assign(this, prop)
    }


    async validatePassword(password: string) {
        // const validateResult = await bcrypt.compare(password, this.password);
        // if (!validateResult) throw new ForbiddenException('Password is incorrect')
    }
} 