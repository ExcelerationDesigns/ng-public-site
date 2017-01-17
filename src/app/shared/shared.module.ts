import './../rxjs-extensions';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { ParallaxDirective } from './directives/parallax/parallax.directive';

@NgModule({
  declarations: [
    ParallaxDirective
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
