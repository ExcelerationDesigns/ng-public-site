import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './contact-page.component';

const contactPageRoutes: Routes = [
  {
    component: ContactPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(contactPageRoutes)
  ]
})
export class ContactPageRoutingModule { }
