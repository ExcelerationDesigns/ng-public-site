/* tslint:disable:no-unused-variable*/
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SpyLocation } from '@angular/common/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { PlatformLocation, LocationStrategy } from '@angular/common';
import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from './../../testing/router-stubs.spec';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { createTranslateLoader } from './../../app.module';
import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { LangService } from './lang.service';

describe('LangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
      ],
      providers: [
        LangService,
        TranslateService,
        TranslateLoader,
        TranslateParser,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  it('should ...', inject([LangService], (service: LangService) => {
    expect(service).toBeTruthy();
  }));
});
