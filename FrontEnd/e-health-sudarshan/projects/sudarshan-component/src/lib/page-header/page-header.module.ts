import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
