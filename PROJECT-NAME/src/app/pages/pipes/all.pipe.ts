import { Pipe, PipeTransform } from '@angular/core';
import { guandaoA , guandaoB} from './all.constant'
@Pipe({
  name: 'guandaoA'
})
export class guandaoAPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return guandaoA.A[value];
  }
}
@Pipe({
  name: 'guandaoB'
})
export class guandaoBPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return guandaoB.B[value];
  }
}
