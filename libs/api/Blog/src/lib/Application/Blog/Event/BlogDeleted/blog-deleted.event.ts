import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { BlogDeletedEvent } from "./blog-deleted.handler";

@EventsHandler(BlogDeletedEvent)
export class BlogDeletedHandler implements IEventHandler<BlogDeletedEvent> {

    handle() {
        console.log("Event => Deleted Blog | Decrease User Score");
    }

}