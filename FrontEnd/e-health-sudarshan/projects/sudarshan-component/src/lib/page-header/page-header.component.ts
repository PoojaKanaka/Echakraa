import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPageHeaderConfig } from './page-header.schema';
import { PageHeaderService } from './page-header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  pageHeaderConfig: IPageHeaderConfig;

  subs: Subscription;

  constructor(private pageHeaderService: PageHeaderService) {
    this.subs = new Subscription();

    this.pageHeaderService
      ?.getPageHeaderConfig()
      ?.subscribe((config) => (this.pageHeaderConfig = config));
  }
}
