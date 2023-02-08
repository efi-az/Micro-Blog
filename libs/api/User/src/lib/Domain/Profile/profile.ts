import { ProfileDomain } from './profile.domain';
import { AggregateRoot } from '@nestjs/cqrs';
import { UpdateProfileDto } from './Dtos/update-profile.dto';
import { ProfileEntity } from '../../Infrastructure/Profile/Entity/profile.entity';

export class ProfileImplement extends AggregateRoot implements ProfileDomain {
    firstname: string
    lastname: string
    phone: string
    email: string
    twitter: string
    linkedin: string
    

    constructor(prop: ProfileEntity) {
        super()
        Object.assign(this, prop)
    }

    update(profile: UpdateProfileDto): ProfileDomain {
        this.firstname = profile.firstname
        this.lastname = profile.lastname
        this.phone = profile.phone
        this.email = profile.email
        this.twitter = profile.twitter
        this.linkedin = profile.linkedin
        return this
    }

} 