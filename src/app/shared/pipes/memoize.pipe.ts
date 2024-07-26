import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'memoize',
  standalone: true,
})
export class MemoizePipe implements PipeTransform {
  transform<R>(value: any, handler: (value: any) => R, context?: any): R {
    if (context) {
      return handler.call(context, value)
    }

    return handler(value)
  }
}
