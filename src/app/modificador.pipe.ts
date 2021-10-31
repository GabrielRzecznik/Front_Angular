import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modificador'
})
export class ModificadorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (<String>value).length;
  }

}
