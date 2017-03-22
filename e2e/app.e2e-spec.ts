import { MockLocalStoragePage } from './app.po';

describe('mock-local-storage App', () => {
  let page: MockLocalStoragePage;

  beforeEach(() => {
    page = new MockLocalStoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
