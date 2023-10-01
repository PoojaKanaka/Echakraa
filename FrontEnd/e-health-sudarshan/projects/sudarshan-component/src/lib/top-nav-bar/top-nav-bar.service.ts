import { Injectable } from '@angular/core';
import { ITopNavBarConfiguration } from './top-nav-bar.schema';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopNavBarService {
  private configuration$: BehaviorSubject<ITopNavBarConfiguration> =
    new BehaviorSubject(null);
  constructor() {}

  setConfiguration(configuration: ITopNavBarConfiguration): void {
    this.configuration$?.next(configuration);
  }

  getConfiguration(): Observable<ITopNavBarConfiguration> {
    return this.configuration$?.asObservable();
  }
}
