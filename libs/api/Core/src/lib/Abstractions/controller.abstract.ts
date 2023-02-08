import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common'

@Controller()
export abstract class BaseController {
    constructor(
        readonly commandBus: CommandBus,
        readonly queryBus: QueryBus
    ) { }

}