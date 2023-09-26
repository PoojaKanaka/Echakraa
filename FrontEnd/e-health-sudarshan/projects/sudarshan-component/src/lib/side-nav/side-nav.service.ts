import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISidenavConfiguration } from './side-nav.schema';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private configuration: BehaviorSubject<ISidenavConfiguration[]>;

  constructor() {
    this.configuration = new BehaviorSubject(null);
  }

  setConfigration(c: ISidenavConfiguration[]) {
    this.configuration?.next(c);
  }

  getConfiguration() {
    return this.configuration?.asObservable();
  }
}
