import { Page } from "@playwright/test";

// My actions (in this example click "Sign In" and click on "Create An Account")

export default class DefaultBarActions {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  buttonSignIn = () => this.page.locator("#x");
  buttonCreateAnAccount = () => this.page.locator("#x");

  // Actions
  public async clickSignIn() {
    await this.buttonSignIn().click();
  }

  public async clickCreateAnAccount() {
    await this.buttonCreateAnAccount().click();
  }
}
