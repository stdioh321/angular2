import { MyRoutePage } from './app.po';

describe('my-route App', function() {
  let page: MyRoutePage;

  beforeEach(() => {
    page = new MyRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
