import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrtoUsd'
})
export class InrtoUsdPipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): unknown {
    return value*0.014;
  }

}
