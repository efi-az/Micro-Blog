import { IEvent } from "@nestjs/cqrs";

export class BlogDeletedEvent implements IEvent {
    constructor() {}
}