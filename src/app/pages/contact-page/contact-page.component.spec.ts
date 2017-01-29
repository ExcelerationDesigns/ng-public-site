/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateService, TranslateModule, TranslateLoader, TranslateParser } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { ContactPageComponent } from './contact-page.component';
import { NotFoundComponent } from './../../layout/not-found/not-found.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { BottomNavComponent } from './../../layout/bottom-nav/bottom-nav.component';

import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from './../../testing/router-stubs.spec';
/*
describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactPageComponent,
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
      fixture = TestBed.createComponent(ContactPageComponent);
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
