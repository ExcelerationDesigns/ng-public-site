/* tslint:disable:no-unused-variable*/
import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './../../testing/router-stubs.spec';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
