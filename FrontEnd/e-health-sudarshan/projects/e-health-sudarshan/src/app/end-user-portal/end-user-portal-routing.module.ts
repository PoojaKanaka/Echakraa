import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUserPortalComponent } from './end-user-portal.component';

const routes: Routes = [
  {
    path: '',
    component: EndUserPortalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndUserRoutingModule {}
