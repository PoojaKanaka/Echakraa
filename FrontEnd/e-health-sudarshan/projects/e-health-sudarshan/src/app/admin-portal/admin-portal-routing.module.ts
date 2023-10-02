import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UTILITIES } from '../utilities/utilities';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: UTILITIES.ROUTE_PATH.DASHBOARD,
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: UTILITIES.ROUTE_PATH.HOSPITAL,
        loadChildren: () =>
          import('./hospital/hospital.module').then((m) => m.HospitalModule),
      },
      {
        path: UTILITIES.ROUTE_PATH.DOCTOR,
        loadChildren: () =>
          import('./doctor/doctor.module').then((m) => m.DoctorModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
