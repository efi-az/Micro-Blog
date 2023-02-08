import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { BlogCreatedEvent } from "./blog-created.event";

@EventsHandler(BlogCreatedEvent)
export class BlogCreatedHandler implements IEventHandler<BlogCreatedEvent> {

    handle() {
        console.log("Event => Created Blog | Increase User Score");
    }

}