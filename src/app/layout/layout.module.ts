import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BottomNavComponent
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BottomNavComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    CoreModule,
    SharedModule,
    TranslateModule,
    RouterModule
  ],
  providers: [
  ]

})
export class LayoutModule { }
