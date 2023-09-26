import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ITopNavBarConfiguration, TopNavBarService } from 'sudarshan-component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  topNavBarConfiguration: ITopNavBarConfiguration;
  hospitalFormControl: FormControl = new FormControl(null);

  constructor(private topNavBarService: TopNavBarService) {
    this.initTopNavBarConfigutration();
    this.topNavBarService?.setConfiguration(this.topNavBarConfiguration);
  }

  initTopNavBarConfigutration(): void {
    this.topNavBarConfiguration = {
      appName: 'Admin Portal',
      controlConfiguration: {
        formControl: this.hospitalFormControl,
        displayKey: 'name',
        controlList: [
          {
            name: 'Hospital 1',
          },
          {
            name: 'Hospital 2',
          },
        ],
      },
    };
  }
}
