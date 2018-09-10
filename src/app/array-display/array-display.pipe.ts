import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayDisplay'
})
export class ArrayDisplayPipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    if (value == null) { return; }
    let val = '';
    for (let i = 0; i < value.length - 1; i++) {
      val += `${value[i]} & `;
    }
    val += `${value[value.length - 1]}`;
    return val;
  }

}
