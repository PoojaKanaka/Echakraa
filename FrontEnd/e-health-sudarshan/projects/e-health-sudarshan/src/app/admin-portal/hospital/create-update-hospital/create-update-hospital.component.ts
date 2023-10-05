import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPageHeaderConfig, PageHeaderService } from '@sudarshan-component';

export interface IHospitalFG {
  hospitalName: FormControl<string>;
  registrationNumber: FormControl<string>;
  mobileNumber: FormControl<string>;
  address: FormControl<string>;
}

@Component({
  selector: 'app-create-update-hospital',
  templateUrl: './create-update-hospital.component.html',
  styleUrls: ['./create-update-hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUpdateHospitalComponent {
  pageHeaderConfiguration: IPageHeaderConfig;
  hospitalFG: FormGroup<IHospitalFG>;

  constructor(private pageHeaderService: PageHeaderService) {
    this.createFormGroup();
    this.initPageHeaderConfig();
    this.pageHeaderService?.setPageHeaderConfig(this.pageHeaderConfiguration);
  }

  createFormGroup(): void {
    this.hospitalFG = new FormGroup({
      hospitalName: new FormControl(null, [Validators.required]),
      mobileNumber: new FormControl(null, [Validators.required]),
      registrationNumber: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
    });
  }

  initPageHeaderConfig(): void {
    this.pageHeaderConfiguration = {
      title: 'Add Hospital',
    };
  }
}
