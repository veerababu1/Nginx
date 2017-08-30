import { NG4Page } from './app.po';

describe('ng4 App', () => {
  let page: NG4Page;

  beforeEach(() => {
    page = new NG4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
