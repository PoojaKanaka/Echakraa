import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITopNavBarConfiguration } from './top-nav-bar.schema';
import { TopNavBarService } from './top-nav-bar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavBarComponent {
  configuration: ITopNavBarConfiguration;

  subs: Subscription;

  constructor(private topNavBarService: TopNavBarService) {
    this.subs = new Subscription();

    this.subs.add(
      this.topNavBarService
        ?.getConfiguration()
        .subscribe((conf) => (this.configuration = conf))
    );
  }
}
