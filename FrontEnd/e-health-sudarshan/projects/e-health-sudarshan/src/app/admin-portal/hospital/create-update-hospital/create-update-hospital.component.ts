import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface IHospitalFG {
  hospitalName: FormControl<string>;
  registrationNumber: FormControl<string>;
  mobileNumber: FormControl<string>;
}

@Component({
  selector: 'app-create-update-hospital',
  templateUrl: './create-update-hospital.component.html',
  styleUrls: ['./create-update-hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUpdateHospitalComponent {
  hospitalFG: FormGroup;
}
