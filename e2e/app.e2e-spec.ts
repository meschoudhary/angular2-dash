import { Angular2DashPage } from './app.po';

describe('angular2-dash App', function() {
  let page: Angular2DashPage;

  beforeEach(() => {
    page = new Angular2DashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
