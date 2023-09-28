import { expect, Page } from "@playwright/test";
import NewAccount from "@sections/3. Create New Customer Account_NewAccount.section";

export default class Home {
  page: Page;
  newAccount: NewAccount;

  constructor(page: Page) {
    this.page = page;
    this.newAccount = new NewAccount(this.page);
  }

  // Actions

  //ex.
  // public async assertWelcomeMessage() {
  //   await expect(this.defaultBarDetails.banner()).toBeVisible();
  // }

  // public async clickSignIn() {
  //   await this.defaultBarDetails.buttonSignIn().click();
  // }
}
