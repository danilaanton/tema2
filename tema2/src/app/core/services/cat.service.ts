import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Cat, Sex, FurColor, Eye, Health, FurPattern } from '../models/cat';
import { Observable, Subject } from 'rxjs';
import catData from './cats.json';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catList: Cat[] = catData;
  catListSubject = new Subject<Cat[]>();

  constructor() {}

  get cats(): Cat[] {
    return this.catList;
  }

  set cats(catsToSet: any) {
    this.catList = catsToSet;
    this.catListSubject.next(catsToSet);
  }

  get(index: number): Cat {
    return this.catList[index];
  }

  delete(index: number) {
    this.catList.splice(index, 1);
    this.catListSubject.next(this.catList);
  }

  create(cat: Cat) {
    this.catList.push(cat);
    this.catListSubject.next(this.catList);
  }

  update(index: number, cat: Cat) {
    if (index < 0 || index >= this.catList.length) return;

    this.catList[index] = cat;
    this.catListSubject.next(this.catList);
  }

  getCatsObservable(): Observable<Cat[]> {
    return this.catListSubject.asObservable();
  }

  getEmptyCat(): Cat {
    return {
      image: '',
      name: '',
      months: 0,
      breed: '',
      sex: Sex.Undefined,
      eyes: [Eye.Other],
      furPattern: FurPattern.Other,
      furColor: [FurColor.Other],
      healthStatus: [],
      additionalComment: '',
    };
  }
}
