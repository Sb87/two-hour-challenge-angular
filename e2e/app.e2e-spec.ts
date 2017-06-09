import { CodingChallengePage } from './app.po';

describe('coding-challenge App', () => {
  let page: CodingChallengePage;

  beforeEach(() => {
    page = new CodingChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
