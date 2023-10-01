import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndUserPortalComponent } from './end-user-portal.component';
import { MaterialModule } from '../material/material.module';
import { EndUserRoutingModule } from './end-user-portal-routing.module';
import { PatientComponent } from './patient/patient.component';
import { EndUserHeaderComponent } from './end-user-header/end-user-header.component';

@NgModule({
  declarations: [EndUserPortalComponent, PatientComponent, EndUserHeaderComponent],
  imports: [CommonModule, MaterialModule, EndUserRoutingModule],
})
export class EndUserPortalModule {}
