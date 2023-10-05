import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IColumnSchema,
  IPageHeaderConfig,
  ListViewService,
  PageHeaderService,
} from '@sudarshan-component';
import { HospitalService, IHospital } from '../hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HospitalComponent implements OnDestroy {
  pageHeaderConfiguration: IPageHeaderConfig;
  hospitalData: IHospital[];
  columnDetails: IColumnSchema[];

  constructor(
    private pageHeaderService: PageHeaderService,
    private router: Router,
    private route: ActivatedRoute,
    private hospitalService: HospitalService,
    private listViewService: ListViewService
  ) {
    this.initPageHeaderConfig();
    this.pageHeaderService?.setPageHeaderConfig(this.pageHeaderConfiguration);
    this.setColumnSchema();
    this.getHospitalData();
  }

  initPageHeaderConfig(): void {
    this.pageHeaderConfiguration = {
      title: 'Hospital',
      buttonConfig: {
        title: 'Add Hospital',
        onClick: this.navigateToDetailComponent?.bind(this, 0),
      },
    };
  }

  setColumnSchema() {
    this.columnDetails = [
      {
        columnId: 'hospitalId',
        columnName: 'Id',
      },
      {
        columnId: 'hospitalName',
        columnName: 'Hospital Name',
      },
      {
        columnId: 'registrationNumber',
        columnName: 'Registration Number',
      },
      {
        columnId: 'mobileNumber',
        columnName: 'Mobile Number',
      },
      {
        columnId: 'address',
        columnName: 'Address',
      },
    ];
  }

  navigateToDetailComponent(id?: string): void {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }

  getHospitalData(): void {
    this.hospitalService.getAllHospitalData().subscribe({
      next: (res) => {
        this.hospitalData = res;
        this.listViewService.setDataSource(this.hospitalData);
        console.log('::: this.hospitalData', this.hospitalData);
      },
    });
  }

  ngOnDestroy(): void {
    this.pageHeaderService?.setPageHeaderConfig(null);
  }
}
