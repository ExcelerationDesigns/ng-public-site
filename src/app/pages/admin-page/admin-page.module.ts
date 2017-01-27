import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { AdminPageRoutingModule } from './admin-page.routing';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    TranslateModule
  ]
})
export class AdminPageModule { }
