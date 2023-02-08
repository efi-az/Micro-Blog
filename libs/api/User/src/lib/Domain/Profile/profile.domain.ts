import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ProfileDomain {
    @IsString()
    @ApiProperty()
    firstname: string

    @IsString()
    @ApiProperty()
    lastname: string

    @IsString()
    @ApiProperty()
    phone: string

    @IsString()
    @ApiProperty()
    email: string

    @IsString()
    @ApiProperty()
    twitter: string

    @IsString()
    @ApiProperty()
    linkedin: string
}