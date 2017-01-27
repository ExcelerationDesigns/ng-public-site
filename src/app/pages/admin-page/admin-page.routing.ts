import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';

const adminPageRoutes: Routes = [
  {
    component: AdminPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(adminPageRoutes)
  ]
})
export class AdminPageRoutingModule { }
