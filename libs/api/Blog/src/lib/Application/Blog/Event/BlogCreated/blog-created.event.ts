import { IEvent } from "@nestjs/cqrs";
import { CreateBlogDto } from "../../../../Domain/blog/dtos/create-blog.dto";

export class BlogCreatedEvent implements IEvent {
    constructor() {}
}