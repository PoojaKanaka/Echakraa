import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPageHeaderConfig } from './page-header.schema';

@Injectable({
  providedIn: 'root',
})
export class PageHeaderService {
  private pageHeaderConfig$: BehaviorSubject<IPageHeaderConfig> =
    new BehaviorSubject(null);

  constructor() {}

  setPageHeaderConfig(config: IPageHeaderConfig): void {
    this.pageHeaderConfig$?.next(config);
  }

  getPageHeaderConfig(): Observable<IPageHeaderConfig> {
    return this.pageHeaderConfig$?.asObservable();
  }
}
