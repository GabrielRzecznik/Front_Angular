import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orden'
})
export class OrdenPipe implements PipeTransform {
  transform(value: Array<any>, ...args: number[]): Array<any> {
    if (args[0]==0) {
      return value.sort((x, y) => x - y);  
    }
    return value.sort((x, y) => x - y);   
  }

}
