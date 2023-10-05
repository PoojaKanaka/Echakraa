import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { CreateUpdateHospitalComponent } from './create-update-hospital/create-update-hospital.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalComponent,
  },
  {
    path: ':id',
    component: CreateUpdateHospitalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalRoutingModule {}
