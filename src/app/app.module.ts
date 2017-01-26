import './rxjs-extensions';

import { BrowserModule, Title } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { AngularFireModule } from 'angularfire2';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { firebaseConfig as FireBaseConfig,
         firebaseAuthConfig as FirebaseAuthConfig } from '../environments/firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundComponent } from './layout/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LangService } from './core/utility/lang.service';

export function buildTranslationPathFromHref(baseHref: string) {
  return buildPathFromHref('/assets/i18n', baseHref);
}

export function buildPathFromHref(baseHref: string, path: string) {
  let folderPath = path;
  if (baseHref && baseHref.length > 0 && baseHref !== '/' ) {
    if (baseHref.endsWith('/')) {
      baseHref = baseHref.slice(0, baseHref.length - 1);
    }
    folderPath = `${baseHref}${folderPath}`;
  }
  return folderPath;
}

export function createTranslateLoader(http: Http, pl: PlatformLocation) {
  return new TranslateStaticLoader(http, buildTranslationPathFromHref(pl.getBaseHrefFromDOM()), '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    TranslateModule.forRoot({
      deps: [Http, PlatformLocation],
      provide: TranslateLoader,
      useFactory: (createTranslateLoader)
    }),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(FireBaseConfig, FirebaseAuthConfig),

  ],
  providers: [
    Title,
    LangService
  ]

})
export class AppModule { }
