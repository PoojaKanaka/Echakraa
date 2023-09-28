import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUserPortalComponent } from './end-user-portal.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: EndUserPortalComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndUserRoutingModule {}
