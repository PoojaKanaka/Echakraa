import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./end-user-portal/end-user-portal.module').then(
        (m) => m.EndUserPortalModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin-portal',
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
