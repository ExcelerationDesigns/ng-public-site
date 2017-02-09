import './../rxjs-extensions';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { CounterDirective } from './directives/counter/counter.directive';
import { TabComponentComponent } from './component/tab-component/tab-component.component';
import { SafeSanitizePipe } from './pipes/safe-sanitize/safe-sanitize.pipe';

@NgModule({
  declarations: [
    ParallaxDirective,
    CounterDirective,
    TabComponentComponent,
    SafeSanitizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ParallaxDirective,
    CounterDirective,
    TabComponentComponent,
    SafeSanitizePipe
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
