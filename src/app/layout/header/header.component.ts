import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy, AfterContentInit } from '@angular/core';
import { MdMenu } from '@angular/material';
import { LangService } from './../../core/utility/lang.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit, OnDestroy, AfterContentInit {
  @Output() onLangClicked = new EventEmitter<string>();

  @ViewChild(MdMenu)
  private menuComponent: MdMenu;

  constructor(public lang: LangService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.menuComponent.ngOnDestroy();
  }

  ngAfterContentInit() {
    this.menuComponent.ngAfterContentInit();
  }

  langClicked(lang: string): void {
    this.onLangClicked.emit(lang);
  }

}
