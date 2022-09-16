import { TodoCreatePage } from './todo-create.po';

describe('create-todo Page', () => {
  let page: TodoCreatePage;

  beforeEach(() => {
    page = new TodoCreatePage();
    page.navigateTo();
  });

  it('should have the heading "Neues Todo erstellen"', () => {
    expect(page.getHeading().getText()).toEqual('Neues Todo erstellen');
  });

  it('should have at least two input elements', () => {
    expect(page.getInputElements().count()).toBeGreaterThanOrEqual(2);
  });

  it('should have an input field for the title', () => {
    expect(page.getTitleInput().isPresent()).toBe(true);
  });

  it('should display a feedback that the title input is invalid', () => {
    expect(page.getFeedback().isDisplayed()).toBe(true);
  });

  it('should disable the save button', () => {
    expect(page.getSaveButton().isEnabled()).toBe(false);
  });

  describe('when an invalid email is entered', () => {
    it('should add the ng-invalid class to the email input', () => {
      page.getEmailInput().sendKeys('notanemail');
      expect(page.getEmailInput().getAttribute('class')).toContain('ng-invalid');
    });
  });

  describe('when the form is valid', () => {
    beforeEach(() => {
      page.getTitleInput().sendKeys('Test Todo');
      page.getEmailInput().sendKeys('test@todo.com');
    });

    it('should add the ng-valid class to the title input', () => {
      expect(page.getTitleInput().getAttribute('class')).toContain('ng-valid');
    });

    it('should enable the save button', () => {
      expect(page.getSaveButton().isEnabled()).toBe(true);
    });

    it('should hide the feedback', () => {
      expect(page.getFeedback().isPresent()).toBe(false);
    });

    it('should reset the form after creating a new todo', () => {
      page.getSaveButton().click().then(() => {
        expect(page.getTitleInput().getText()).toBe('');
        expect(page.getEmailInput().getText()).toBe('');
      });
    });
  });
});
