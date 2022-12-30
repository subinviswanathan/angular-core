import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlySingleError'
})
export class OnlySingleErrorPipe implements PipeTransform {

  transform(errors: any, paramsPriority: string[]) {
    if (!errors) {
      return null;
    }
    const onlySingleError: any = {};
    for (let param of paramsPriority) {
      if (errors[param]) {
        onlySingleError[param] = errors[param];
        break;
      }
    }
    return onlySingleError;
  }

}
