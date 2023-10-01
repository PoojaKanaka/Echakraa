import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent, LayoutComponent],
  imports: [CommonModule, AuthenticationRoutingModule, MaterialModule],
})
export class AuthenticationModule {}
