import { PouchExperimentPage } from './app.po';

describe('pouch-experiment App', function() {
  let page: PouchExperimentPage;

  beforeEach(() => {
    page = new PouchExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
