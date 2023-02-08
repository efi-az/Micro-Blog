import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsString } from 'class-validator'

export class BlogDomain {
    @IsString()
    @ApiProperty()
    title: string;
    
    @IsString()
    @ApiProperty()
    content: string;
    
    @IsArray()
    @ApiProperty()
    tags: string[];
    
    @IsString()
    @ApiProperty()
    summary: string;
    
    @IsString()
    @ApiProperty()
    slug: string;

    @IsBoolean()
    @ApiProperty()
    isLock: boolean
}