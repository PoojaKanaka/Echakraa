import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPageHeaderConfig, PageHeaderService } from '@sudarshan-component';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HospitalComponent {
  pageHeaderConfiguration: IPageHeaderConfig;

  constructor(
    private pageHeaderService: PageHeaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initPageHeaderConfig();
    this.pageHeaderService?.setPageHeaderConfig(this.pageHeaderConfiguration);
  }

  initPageHeaderConfig(): void {
    this.pageHeaderConfiguration = {
      title: 'Hospital',
      buttonConfig: {
        title: 'Add Hospital',
        onClick: this.navigateToDetailComponent?.bind(this, 0),
      },
    };
  }

  navigateToDetailComponent(id?: string): void {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
