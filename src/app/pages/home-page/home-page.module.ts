import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { SharedModule } from '../../shared/shared.module';

import { HomePageRoutingModule } from './home-page.routing';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomePageModule { }
