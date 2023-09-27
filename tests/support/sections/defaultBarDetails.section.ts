import { Page } from "@playwright/test";

export default class DefaultBarDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  buttonSignIn = () => this.page.locator("#x");

  // Actions
}
