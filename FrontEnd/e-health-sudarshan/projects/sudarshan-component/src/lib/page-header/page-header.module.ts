import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, MatDividerModule, MatFormFieldModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
