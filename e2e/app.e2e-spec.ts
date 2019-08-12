import { CokiPage } from './app.po';

describe('coki App', function() {
  let page: CokiPage;

  beforeEach(() => {
    page = new CokiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
