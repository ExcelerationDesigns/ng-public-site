import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LangService } from './../../core/utility/lang.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  @Output() onLangClicked = new EventEmitter<string>();

  flagUrl: string = ""; // this.lang.getCurrentImageStr();
  constructor() { }

  ngOnInit() {
  }

  langClicked(lang: string): void {
    this.onLangClicked.emit(lang);
  }

}
