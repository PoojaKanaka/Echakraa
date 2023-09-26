import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UTILITIES } from '../../utilities/utilities';

interface IAuthGroupSchema {
  mobile_number: FormControl<number | string | null>;
  otp: FormControl<number | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  authFormGroup!: FormGroup<IAuthGroupSchema>;

  get mobileNumberControl(): FormControl {
    return this.authFormGroup?.get('mobile_number') as FormControl;
  }

  ERROR_MESSAGE = UTILITIES.ERROR_MESSAGE;

  constructor(private router: Router) {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.authFormGroup = new FormGroup({
      mobile_number: new FormControl(null, [
        Validators.required,
        Validators.pattern(UTILITIES.REGEX_PATTERN.MOBILE_NUMBER),
      ]),
      otp: new FormControl(null),
    });
  }

  navigateToDoctorPortal(): void {
    this.router.navigate(['.', 'admin-portal']);
  }
}
