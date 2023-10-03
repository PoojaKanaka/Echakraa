import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {}
