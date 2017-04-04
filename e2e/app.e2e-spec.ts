import { SlideoutPage } from './app.po';

describe('slideout App', () => {
  let page: SlideoutPage;

  beforeEach(() => {
    page = new SlideoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
