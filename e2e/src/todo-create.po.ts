import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

export class TodoCreatePage {
  public getHeading() {
    return element(by.tagName('h1'));
  }

  public getInputElements(): ElementArrayFinder {
    return element.all(by.tagName('input'));
  }

  public getTitleInput(): ElementFinder {
    return element(by.id('title'));
  }

  public getEmailInput(): ElementFinder {
    return element(by.id('email'));
  }

  public getFeedback(): ElementFinder {
    return element(by.className('feedback'));
  }

  public getSaveButton(): ElementFinder {
    return element(by.css('form button'));
  }

  public navigateTo(): promise.Promise<any> {
    return browser.get('/todos/new');
  }
}
