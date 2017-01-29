import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDevelopmentComponent } from './app-development/app-development.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';

const servicePageRoutes: Routes = [
  {
    component: AppDevelopmentComponent,
    path: 'application-development'
  },
  {
    component: ConsultingComponent,
    path: 'technical-consulting'
  },
  {
    component: WebsiteDesignComponent,
    path: 'website-design'
  },
  {
    component: WebsiteDesignComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(servicePageRoutes)
  ]
})
export class ServicePageRoutingModule { }
