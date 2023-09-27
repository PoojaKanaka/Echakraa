import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ISidenavConfiguration,
  ITopNavBarConfiguration,
  SideNavService,
  TopNavBarService,
} from 'sudarshan-component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  topNavBarConfiguration: ITopNavBarConfiguration;
  sidenavConfiguration: ISidenavConfiguration[];

  hospitalFormControl: FormControl = new FormControl(null);

  constructor(
    private topNavBarService: TopNavBarService,
    private sideNavService: SideNavService
  ) {
    this.initTopNavBarConfigutration();
    this.initSideNavConfiguration();
    this.topNavBarService?.setConfiguration(this.topNavBarConfiguration);
    this.sideNavService?.setConfigration(this.sidenavConfiguration);
  }

  initTopNavBarConfigutration(): void {
    this.topNavBarConfiguration = {
      appName: 'Admin Portal',
      // controlConfiguration: {
      //   formControl: this.hospitalFormControl,
      //   displayKey: 'name',
      //   controlList: [
      //     {
      //       name: 'Hospital 1',
      //     },
      //     {
      //       name: 'Hospital 2',
      //     },
      //   ],
      // },
    };
  }

  initSideNavConfiguration(): void {
    this.sidenavConfiguration = [
      {
        menuName: 'Dashboard',
        navigationURL: ['.'],
        iconName: 'dashboard',
      },
      {
        menuName: 'Hospitals',
        navigationURL: ['hospital'],
        iconName: 'apartment',
      },
      {
        menuName: 'Doctors',
        navigationURL: ['doctor'],
        iconName: 'person_add',
      },
    ];
  }
}
