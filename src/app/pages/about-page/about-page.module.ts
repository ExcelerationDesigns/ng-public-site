import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { AboutPageRoutingModule } from './about-page.routing';
import { AboutPageComponent } from './about-page.component';

import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    SharedModule,
    TranslateModule
  ]

})
export class AboutPageModule { }
