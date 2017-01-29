import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page.component';

const loginPageRoutes: Routes = [
  {
    component: LoginPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(loginPageRoutes)
  ]
})
export class LoginPageRoutingModule { }
