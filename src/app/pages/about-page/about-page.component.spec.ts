/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateService, TranslateModule, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';

import { AboutPageComponent } from './about-page.component';
import { SharedModule } from './../../shared/shared.module';
import { NotFoundComponent } from './../../layout/not-found/not-found.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { BottomNavComponent } from './../../layout/bottom-nav/bottom-nav.component';

import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from './../../testing/router-stubs.spec';
/*
describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutPageComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        BottomNavComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        TranslateModule,
        SharedModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
      ],
      providers: [
        TranslateLoader,
        TranslateParser,
        TranslateService
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AboutPageComponent);
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
