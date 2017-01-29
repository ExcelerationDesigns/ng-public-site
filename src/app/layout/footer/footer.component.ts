import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog } from '@angular/material';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Subscription } from 'rxjs/Subscription';

import { LawyerDialogComponent } from './lawyer-dialog/lawyer-dialog.component';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {
  row: any;
  private transSubscription: Subscription;

  constructor(public dialog: MdDialog,
              public translate: TranslateService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.transSubscription != null) {
      this.transSubscription.unsubscribe();
    }
  }

  public openLawyerDialog(type: string) {
    this.transSubscription = this.translate.get(`footer.${type}`).subscribe((res: string) => {
      const dialogRef = this.dialog.open(LawyerDialogComponent);
      dialogRef.componentInstance['textContent'] = res;
    });

  }

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
