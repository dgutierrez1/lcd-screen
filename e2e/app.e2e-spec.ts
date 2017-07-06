import { AdminPdfGenerationPage } from './app.po';

describe('admin-pdf-generation App', () => {
  let page: AdminPdfGenerationPage;

  beforeEach(() => {
    page = new AdminPdfGenerationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
