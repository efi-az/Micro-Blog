import { ICommand } from "@nestjs/cqrs";
import { CreateUserDto } from "../../../../Domain/User/Dtos/create-user.dto";

export class CreateUserCommand implements ICommand {
    constructor(
        public readonly createUserDto: CreateUserDto,
    ) { }
}