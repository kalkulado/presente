import { PresentePage } from './app.po';

describe('presente App', function() {
  let page: PresentePage;

  beforeEach(() => {
    page = new PresentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
