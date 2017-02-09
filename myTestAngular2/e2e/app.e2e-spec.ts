import { MyTestAngular2Page } from './app.po';

describe('my-test-angular2 App', function() {
  let page: MyTestAngular2Page;

  beforeEach(() => {
    page = new MyTestAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
