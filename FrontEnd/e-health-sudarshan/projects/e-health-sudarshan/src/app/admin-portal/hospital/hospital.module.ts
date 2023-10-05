import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './hospital/hospital.component';
import { CreateUpdateHospitalComponent } from './create-update-hospital/create-update-hospital.component';
import { PageHeaderModule } from '@sudarshan-component';

@NgModule({
  declarations: [HospitalComponent, CreateUpdateHospitalComponent],
  imports: [CommonModule, HospitalRoutingModule, PageHeaderModule],
})
export class HospitalModule {}
