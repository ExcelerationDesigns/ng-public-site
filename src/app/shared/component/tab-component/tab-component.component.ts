import { Component, OnInit, Input } from '@angular/core';

export interface TabContent {
  content: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-tab-component',
  styleUrls: ['./tab-component.component.scss'],
  templateUrl: './tab-component.component.html'
})
export class TabComponentComponent implements OnInit {

  @Input() tabContent: TabContent[];
  constructor() { }

  ngOnInit() {
  }

}
