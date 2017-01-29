import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  styleUrls: ['./admin-page.component.scss'],
  templateUrl: './admin-page.component.html'
})
export class AdminPageComponent implements OnInit {
  private testVar = 'test';

  constructor() {
    console.log(`constructor(AdminPageComponent): ${this.testVar}`);
  }

  ngOnInit() {
    console.log(`ngOnInit(AdminPageComponent): ${this.testVar}`);
  }

}
