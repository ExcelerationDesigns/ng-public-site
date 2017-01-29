import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-lawyer-dialog',
  styleUrls: ['./lawyer-dialog.component.scss'],
  templateUrl: './lawyer-dialog.component.html'
})
export class LawyerDialogComponent implements OnInit {

  public selectedTab: number = 0;

  constructor(public dialogRef: MdDialogRef<LawyerDialogComponent>) { }

  ngOnInit() {
  }

}
