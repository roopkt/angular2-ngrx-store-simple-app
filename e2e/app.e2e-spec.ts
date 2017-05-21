import { LearnNgrxStorePage } from './app.po';

describe('learn-ngrx-store App', () => {
  let page: LearnNgrxStorePage;

  beforeEach(() => {
    page = new LearnNgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
