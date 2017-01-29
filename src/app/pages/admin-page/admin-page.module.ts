import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { AdminPageRoutingModule } from './admin-page.routing';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    TranslateModule,
    SharedModule,
    MaterialModule
  ]
})
export class AdminPageModule { }
