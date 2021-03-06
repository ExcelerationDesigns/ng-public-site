import { browser, element, by } from 'protractor';

export class Ng2PublicSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderComponent() {
    return element(by.css('app-header')).getText();
  }

  getFooterComponent() {
    return element(by.css('app-footer')).getText();
  }

  getNavLinkList() {
    return element.all(by.css('app-root app-header nav button'));
  }

  getHomeLinkText() {
    return element(by.css('.home')).getText();
  }

  getLangListArray() {
    return element.all(by.css('app-root app-header nav .lang-buttons [md-button]'));
  }

  getHomePageComponent() {
    return element(by.css('app-root app-home-page'));
  }

  getAboutPageComponent() {
    return element(by.css('app-root app-about-page'));
  }
}
