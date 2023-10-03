import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UTILITIES } from '../../utilities/utilities';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface IAuthGroupSchema {
  mobileNumber: FormControl<string | null>;
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
    return this.authFormGroup?.get('mobileNumber') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.authFormGroup?.get('password') as FormControl;
  }

  ERROR_MESSAGE = UTILITIES.ERROR_MESSAGE;

  constructor(
    private router: Router,
    private authService: AuthService,
    private matSnackBar: MatSnackBar
  ) {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.authFormGroup = new FormGroup({
      mobileNumber: new FormControl(null, [
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
    this.router.navigate(['.', UTILITIES.ROUTE_PATH.ADMIN_PORTAL]);
    const rowValue = this.authFormGroup.getRawValue();
    this.authService.login(rowValue).subscribe({
      next: (res) => {
        console.log('::: res', res);
        this.router.navigate(['.', UTILITIES.ROUTE_PATH.ADMIN_PORTAL]);
      },
      error: (err) => {
        this.matSnackBar.open('Mobile number or passwor incorrect', 'Ok', {
          duration: 1500,
        });
        console.log('::: error', err);
      },
    });
  }
}
