import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return "_" + value + "_";
    // console.log(value, args);
    if (!args) return value;
    args = args.toLowerCase();
    var tmp = value.filter(
      (val) => (val.toLowerCase().indexOf(args) != -1) ? true : false
    );
    return tmp;
  }

}
