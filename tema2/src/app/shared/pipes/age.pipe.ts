import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: number): string {
    const years = Math.floor(value / 12);
    const months = value % 12;
    const yearString = years == 1 ? 'year' : 'years';
    const monthString = months == 1 ? 'month' : 'months';
    if (years > 0 && months > 0) {
      return `${years} ${yearString} and ${months} ${monthString}`;
    } else if (years > 0) {
      return `${years} ${yearString}`;
    } else {
      return `${months} ${monthString}`;
    }
  }
}
