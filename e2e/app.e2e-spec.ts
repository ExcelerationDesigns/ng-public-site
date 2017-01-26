import { Ng2PublicSitePage } from './app.po';

describe('ng-public-site App', () => {
  let page: Ng2PublicSitePage;

  beforeEach(() => {
    page = new Ng2PublicSitePage();
    page.navigateTo();
  });

  it('should have an app-header component', () => {
    expect(page.getHeaderComponent()).toBeDefined();
  });

  it('should have an app-footer component', () => {
    expect(page.getFooterComponent()).toBeDefined();
  });

  describe('navigation is built properly', () => {
    it('should have three links', () => {
      expect(page.getNavLinkList().count()).toEqual(3);
    });

    it('should have a link to home page', () => {
      const linkList = page.getNavLinkList();
      expect(linkList.get(0).getText()).toEqual('Home');
    });

    it('should have a link to about page', () => {
      const linkList = page.getNavLinkList();
      expect(linkList.get(1).getText()).toEqual('About');
    });
  });

  describe('navigation switches pages', () => {
    it('should have a link to home page', () => {
      page.getNavLinkList().get(0).click().then(() => {
        expect(page.getHomePageComponent().getText()).toContain('Welcome to');
      });
    });

    it('should have a link to about page', () => {
      page.getNavLinkList().get(1).click().then(() => {
        expect(page.getAboutPageComponent().getText()).toEqual('About');
      });
    });
  });

});
