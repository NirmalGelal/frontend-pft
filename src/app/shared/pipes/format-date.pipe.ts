import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: number[]): string {
    const [year, month, day, hour, minute, second, milliSeconds] = value;
    const dateTime = new Date(year, month, day, hour, minute, second, milliSeconds);
    return dateTime.toLocaleString();
  }

}
