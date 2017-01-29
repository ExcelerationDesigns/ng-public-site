import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { ConsultingComponent } from './consulting/consulting.component';

import { ServicePageRoutingModule } from './service-page.routing';

@NgModule({
  declarations: [
    WebsiteDesignComponent,
    AppDevelopmentComponent,
    ConsultingComponent
  ],
  exports: [
    WebsiteDesignComponent,
    AppDevelopmentComponent,
    ConsultingComponent
  ],
  imports: [
    CommonModule,
    ServicePageRoutingModule
  ]
})
export class ServicePageModule { }
