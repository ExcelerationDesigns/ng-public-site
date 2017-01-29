import 'rxjs/add/operator/map';

import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MediaChange } from '@angular/flex-layout';
import { ObservableMediaService } from '@angular/flex-layout/media-query/observable-media-service';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Subscription } from 'rxjs/Subscription';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile: boolean = false;
  private mediaQueryWatcher: Subscription;
  private routeWatcher: Subscription;

  constructor(private titleService: Title,
              private translate: TranslateService,
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private router: Router,
              @Inject(ObservableMediaService) private media$) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en_US');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en_US');
    translate.get('appTitle').subscribe(
      (res: string) => this.titleService.setTitle(res)
    );
  }

  ngOnInit() {
    this.watchMediaQueryChanges();
    this.registerScrollToTop();
  }

  registerScrollToTop() {
    this.routeWatcher = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }

  ngOnDestroy() {
    if (this.routeWatcher) {
      this.routeWatcher.unsubscribe();
    }

    if (this.mediaQueryWatcher) {
      this.mediaQueryWatcher.unsubscribe();
    }
  }

  watchMediaQueryChanges() {
    this.mediaQueryWatcher = this.media$.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
    });
  }

  toggleLang(langToUse: string) {
    this.translate.use(langToUse);
  }
}
