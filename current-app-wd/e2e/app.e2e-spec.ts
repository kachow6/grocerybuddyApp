import { GrocerybuddyCLIPage } from './app.po';

describe('grocerybuddy-cli App', () => {
  let page: GrocerybuddyCLIPage;

  beforeEach(() => {
    page = new GrocerybuddyCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
