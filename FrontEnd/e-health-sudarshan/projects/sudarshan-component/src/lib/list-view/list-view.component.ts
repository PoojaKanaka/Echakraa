import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { ListViewService } from './list-view.service';
import { IColumnSchema } from './list-view.schema';

@Component({
  selector: 'lib-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {
  @Input({ required: true }) set columnDetails(columnSchema: IColumnSchema[]) {
    this._columnDetails = columnSchema;
    this.columnsName = columnSchema.map((c) => c.columnId);
  }

  // @Input() listViewConfiguration:

  get columnDetails() {
    return this._columnDetails;
  }

  private _columnDetails: IColumnSchema[];
  columnsName: string[];

  dataSource;

  constructor(
    private listViewService: ListViewService,
    private cdr: ChangeDetectorRef
  ) {
    this.listViewService.getDataSource().subscribe((data) => {
      this.dataSource = data;
      this.cdr.markForCheck();
    });
  }
}
