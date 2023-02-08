import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { map, Observable } from 'rxjs';

class Response200 {
    status: number = 200;
    result: Object | any;
    timestamps: number = Date.now();
}
class ResponseOk {
    static getData(obj: Object): Response200 {
        return {
            status: 200,
            result: obj,
            timestamps: Date.now()
        }
    }
}

export function ResponseSuccessSerialize() {
    return UseInterceptors(ResponseSuccessInterceptor)
}

export class ResponseSuccessInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Response200> | Promise<Observable<Response200>> {
        return next.handle().pipe(map(data => (ResponseOk.getData(data))))
    }
}