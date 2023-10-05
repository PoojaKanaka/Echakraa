import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListViewService {
  private dataSource$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor() {}

  setDataSource(data) {
    this.dataSource$?.next(data);
  }

  getDataSource() {
    return this.dataSource$.asObservable();
  }
}
