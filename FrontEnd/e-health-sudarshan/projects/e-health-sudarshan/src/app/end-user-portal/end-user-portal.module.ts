import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndUserPortalComponent } from './end-user-portal.component';
import { MaterialModule } from '../material/material.module';
import { EndUserRoutingModule } from './end-user-portal-routing.module';

@NgModule({
  declarations: [EndUserPortalComponent],
  imports: [CommonModule, MaterialModule, EndUserRoutingModule],
})
export class EndUserPortalModule {}
