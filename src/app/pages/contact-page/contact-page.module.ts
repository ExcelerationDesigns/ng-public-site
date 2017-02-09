import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../../shared/shared.module';

import { ContactPageRoutingModule } from './contact-page.routing';
import { ContactPageComponent } from './contact-page.component';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    TranslateModule,
    SharedModule,
    AgmCoreModule
  ]
})
export class ContactPageModule { }
