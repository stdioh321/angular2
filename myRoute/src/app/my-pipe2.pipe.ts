import { Pipe, PipeTransform } from '@angular/core';

import { MyPipePipe } from "./my-pipe.pipe";

@Pipe({
  name: 'myPipe2',
  pure: false
})
export class MyPipe2Pipe extends MyPipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return "_" + value + "_";
  // }

}
