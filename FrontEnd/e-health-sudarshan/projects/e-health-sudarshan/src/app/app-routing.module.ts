import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UTILITIES } from './utilities/utilities';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./end-user-portal/end-user-portal.module').then(
        (m) => m.EndUserPortalModule
      ),
  },
  {
    path: UTILITIES.ROUTE_PATH.AUTH,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: UTILITIES.ROUTE_PATH.ADMIN_PORTAL,
    loadChildren: () =>
      import('./admin-portal/admin-portal.module').then(
        (m) => m.AdminPortalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
