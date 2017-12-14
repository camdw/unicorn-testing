import { UnicornTestingAppPage } from './app.po';

describe('unicorn-testing-app App', () => {
  let page: UnicornTestingAppPage;

  beforeEach(() => {
    page = new UnicornTestingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
