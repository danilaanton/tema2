import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinList',
})
export class JoinListPipe implements PipeTransform {
  transform(list: any[]): string {
    return list.join(', ');
  }
}
