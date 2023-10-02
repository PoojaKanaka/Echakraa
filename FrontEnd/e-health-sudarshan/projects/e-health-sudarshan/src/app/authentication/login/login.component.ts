import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UTILITIES } from '../../utilities/utilities';
import { AuthService } from '../auth.service';

interface IAuthGroupSchema {
  userId: FormControl<string | null>;
  password: FormControl<string | null>;
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
    return this.authFormGroup?.get('userId') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.authFormGroup?.get('password') as FormControl;
  }

  ERROR_MESSAGE = UTILITIES.ERROR_MESSAGE;

  constructor(private router: Router, private authService: AuthService) {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.authFormGroup = new FormGroup({
      userId: new FormControl(null, [
        Validators.required,
        Validators.pattern(UTILITIES.REGEX_PATTERN.MOBILE_NUMBER),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  navigateToDoctorPortal(): void {
    // const rowValue = this.authFormGroup.getRawValue();
    // this.authService.login(rowValue).subscribe({
    //   next: (res) => console.log(':::: res', res),
    //   error: (err) => console.log('::: error', err),
    // });
    this.router.navigate(['.', UTILITIES.ROUTE_PATH.ADMIN_PORTAL]);
  }
}
