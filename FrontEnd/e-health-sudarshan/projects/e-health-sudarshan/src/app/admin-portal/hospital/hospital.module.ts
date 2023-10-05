import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './hospital/hospital.component';
import { CreateUpdateHospitalComponent } from './create-update-hospital/create-update-hospital.component';
import {
  ListViewModule,
  MobileNumberModule,
  PageHeaderModule,
} from '@sudarshan-component';
import { MaterialModule } from '../../material/material.module';
import { HospitalService } from './hospital.service';

@NgModule({
  declarations: [HospitalComponent, CreateUpdateHospitalComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule,
    PageHeaderModule,
    MaterialModule,
    MobileNumberModule,
    ListViewModule,
  ],
  providers: [HospitalService],
})
export class HospitalModule {}
