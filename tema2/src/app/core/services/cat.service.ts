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
  private increment: number = this.catList.length;

  constructor() {}

  get cats(): Cat[] {
    return this.catList;
  }

  set cats(catsToSet: any) {
    this.catList = catsToSet;
    this.catListSubject.next(catsToSet);
  }

  get(id: number): Cat {
    const found = this.catList.filter(x => x.id == id);
    if(found.length == 0)
      return this.getEmptyCat();
    return found[0];
  }

  delete(id: number) {
    const found = this.catList.filter(x => x.id == id);
    if(found.length == 0)
      return;

    this.catList.splice(this.catList.indexOf(found[0]), 1);
    this.catListSubject.next(this.catList);
  }

  create(cat: Cat) {
    cat.id = this.increment;
    this.catList.push(cat);
    this.increment++;
    this.catListSubject.next(this.catList);
  }

  update(id: number, cat: Cat) {
    const found = this.catList.filter(x => x.id == id);
    if(found.length == 0)
      return;

    cat.id=id;
    this.catList[this.catList.indexOf(found[0])] = cat;
    this.catListSubject.next(this.catList);
  }

  getCatsObservable(): Observable<Cat[]> {
    return this.catListSubject.asObservable();
  }

  getEmptyCat(): Cat {
    return {
      id: -1,
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
