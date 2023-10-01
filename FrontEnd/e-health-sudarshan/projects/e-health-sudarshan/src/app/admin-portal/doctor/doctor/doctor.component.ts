import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorComponent {

}
