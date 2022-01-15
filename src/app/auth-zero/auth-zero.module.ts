import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

/**
 * This module contains login and logout components.
 */
@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ]
})
export class AuthZeroModule { }
