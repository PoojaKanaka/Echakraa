import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListViewComponent],
  imports: [CommonModule, MatTableModule],
  exports: [ListViewComponent],
})
export class ListViewModule {}
