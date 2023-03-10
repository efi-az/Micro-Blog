import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CategoryDomain {
    @IsString()
    @ApiProperty()
    name: string
    
    @IsString()
    @ApiProperty()
    description: string
}