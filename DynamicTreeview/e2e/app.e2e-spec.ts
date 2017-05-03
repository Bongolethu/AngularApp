import { DynamicTreeviewPage } from './app.po';

describe('dynamic-treeview App', () => {
  let page: DynamicTreeviewPage;

  beforeEach(() => {
    page = new DynamicTreeviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
