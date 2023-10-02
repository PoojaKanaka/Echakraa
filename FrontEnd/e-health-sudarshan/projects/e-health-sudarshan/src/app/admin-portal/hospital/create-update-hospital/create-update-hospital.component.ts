import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-update-hospital',
  templateUrl: './create-update-hospital.component.html',
  styleUrls: ['./create-update-hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUpdateHospitalComponent {
  hospitalFG: FormGroup;
}
