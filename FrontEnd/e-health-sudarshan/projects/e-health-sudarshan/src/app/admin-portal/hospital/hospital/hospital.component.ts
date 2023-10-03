import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPageHeaderConfig, PageHeaderService } from 'sudarshan-component';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HospitalComponent {
  pageHeaderConfiguration: IPageHeaderConfig;

  constructor(private pageHeaderService: PageHeaderService) {
    this.initPageHeaderConfig();
    this.pageHeaderService?.setPageHeaderConfig(this.pageHeaderConfiguration);
  }

  initPageHeaderConfig(): void {
    this.pageHeaderConfiguration = {
      title: 'Hospital',
      buttonConfig: {
        title: 'Add Hospital',
        onClick: () => {
          console.log(':::: Add Hospital');
        },
      },
    };
  }
}
