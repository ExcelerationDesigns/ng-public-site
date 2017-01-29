import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { CoreModule } from './../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page.routing';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class LoginPageModule { }
