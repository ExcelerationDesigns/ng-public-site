import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LawyerDialogComponent } from './lawyer-dialog/lawyer-dialog.component';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {
  row: any;

  constructor(public dialog: MdDialog,
              public authService: AuthService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  public openLawyerDialog(type: string) {

    const dialogRef = this.dialog.open(LawyerDialogComponent);
    let selectedTab = 0;
    switch (type) {
    case 'privacy':
      selectedTab = 0;
      break;
    case 'tos':
      selectedTab = 1;
      break;
    default:
      break;
    }
    dialogRef.componentInstance['selectedTab'] = selectedTab;

  }

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

  public logout() {
    this.authService.logout();
  }

}
