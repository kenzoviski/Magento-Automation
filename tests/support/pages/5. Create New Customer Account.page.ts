import { expect, Page } from "@playwright/test";
import NewAccount from "@sections/5. Create New Customer Account_NewAccount.section";

export default class Home {
  page: Page;
  newAccount: NewAccount;

  constructor(page: Page) {
    this.page = page;
    this.newAccount = new NewAccount(this.page);
  }

  // Actions

  // }
}
