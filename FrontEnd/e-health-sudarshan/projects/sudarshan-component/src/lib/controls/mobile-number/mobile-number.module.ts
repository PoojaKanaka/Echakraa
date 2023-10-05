import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileNumberComponent } from './mobile-number.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MobileNumberComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [MobileNumberComponent],
})
export class MobileNumberModule {}
