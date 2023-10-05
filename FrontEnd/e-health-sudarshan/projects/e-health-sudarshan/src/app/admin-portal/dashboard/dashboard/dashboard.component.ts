import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { IPageHeaderConfig, PageHeaderService } from '@sudarshan-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnDestroy {
  pageHeaderConfiguration: IPageHeaderConfig;

  constructor(private pageHeaderService: PageHeaderService) {
    this.initPageHeaderConfig();
    this.pageHeaderService?.setPageHeaderConfig(this.pageHeaderConfiguration);
  }

  initPageHeaderConfig(): void {
    this.pageHeaderConfiguration = {
      title: 'Dashboard',
    };
  }

  ngOnDestroy(): void {
    this.pageHeaderService?.setPageHeaderConfig(null);
  }
}
