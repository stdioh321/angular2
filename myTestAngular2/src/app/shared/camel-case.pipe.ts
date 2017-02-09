import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
  ,pure: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any, args2?: any, args3?: any): any {
    console.log(arguments);
    console.log(args, args2, args3);
    return `camelCase_${value}`;
  }

}
