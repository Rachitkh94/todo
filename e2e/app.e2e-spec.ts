import { Todo2Page } from './app.po';

describe('todo2 App', () => {
  let page: Todo2Page;

  beforeEach(() => {
    page = new Todo2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
