import { expect, Page } from "@playwright/test";
import NewCustomersDetails from "@sections/3. Customer Login_NewCustomers.section";
import RegisteredCustomers from "@sections/3. Customer Login_RegisteredCustomers.section";

export default class Home {
  page: Page;
  newCustomersDetails: NewCustomersDetails;
  registeredCustomers: RegisteredCustomers;

  constructor(page: Page) {
    this.page = page;
    this.newCustomersDetails = new NewCustomersDetails(this.page);
    this.registeredCustomers = new RegisteredCustomers(this.page);
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
