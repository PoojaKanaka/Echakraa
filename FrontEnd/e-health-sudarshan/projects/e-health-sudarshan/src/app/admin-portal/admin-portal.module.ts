import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SideNavModule, TopNavBarModule } from 'sudarshan-component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    TopNavBarModule,
    SideNavModule,
  ],
})
export class AdminPortalModule {}
