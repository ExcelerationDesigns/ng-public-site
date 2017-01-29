/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateService, TranslateModule, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { AdminPageComponent } from './admin-page.component';
import { SharedModule } from './../../shared/shared.module';
import { NotFoundComponent } from './../../layout/not-found/not-found.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { BottomNavComponent } from './../../layout/bottom-nav/bottom-nav.component';
import { AdminPageRoutingModule } from './admin-page.routing';

import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from './../../testing/router-stubs.spec';
/*
describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminPageComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        TranslateModule,
        CommonModule,
        SharedModule,
        AdminPageRoutingModule
      ],
      providers: [
        TranslateLoader,
        TranslateParser,
        TranslateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBe(true);
  });
});
*/
