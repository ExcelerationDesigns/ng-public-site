/* tslint:disable:no-unused-variable */
import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDialogModule, MdDialog, OverlayContainer, MaterialModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawyerDialogComponent } from './lawyer-dialog.component';

@NgModule({
  declarations: [LawyerDialogComponent],
  entryComponents: [LawyerDialogComponent],
  exports: [LawyerDialogComponent],
  imports: [MdDialogModule],
})
class DialogTestModule { }

describe('LawyerDialogComponent', () => {
  let component: LawyerDialogComponent;
  let dialog: MdDialog;
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DialogTestModule,
        MdDialogModule.forRoot()
      ],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(LawyerDialogComponent);

    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
