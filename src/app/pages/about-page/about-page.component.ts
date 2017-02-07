import { Component, OnInit } from '@angular/core';
import { TabContent } from './../../shared/component/tab-component/tab-component.component';

@Component({
  selector: 'app-about-page',
  styleUrls: ['./about-page.component.scss'],
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent implements OnInit {
  tabContent: TabContent[];
  constructor() { }

  ngOnInit() {
    this.tabContent = [
      {
        content: 'aboutPage.historyContent',
        icon: 'ion-ios-home-outline',
        label: 'aboutPage.history'
      },
      {
        content: 'aboutPage.visionContent',
        icon: 'ion-ios-body-outline',
        label: 'aboutPage.vision'
      },
      {
        content: 'aboutPage.missionContent',
        icon: 'ion-ios-notifications-outline',
        label: 'aboutPage.mission'
      }
    ];
  }

}
