/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SpyLocation } from '@angular/common/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { PlatformLocation, LocationStrategy } from '@angular/common';
import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from './../../testing/router-stubs.spec';

import { MaterialModule, MdMenuModule,
                        MdMenuTrigger } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { createTranslateLoader } from './../../app.module';
import { CoreModule } from './../../core/core.module';
import { LangService } from './../../core/utility/lang.service';

import { TranslateModule, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot({
          deps: [Http, PlatformLocation],
          provide: TranslateLoader,
          useFactory: (createTranslateLoader)
        }),
        CoreModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        MdMenuModule.forRoot()
      ],
      providers: [
        TranslateService,
        TranslateLoader,
        TranslateParser,
        { provide: Router, useClass: RouterStub },
        { provide: Location, useClass: SpyLocation },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        LangService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
