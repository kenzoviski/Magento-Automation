import { expect, Page } from "@playwright/test";
import NewCustomersDetails from "@sections/2. Customer Login_NewCustomers.section";
import RegisteredCustomers from "@sections/2. Customer Login_RegisteredCustomers.section";

export default class Home {
  page: Page;
  newCustomersDetails: NewCustomersDetails;
  registeredCustomers: RegisteredCustomers;

  constructor(page: Page) {
    this.page = page;
    this.newCustomersDetails = new NewCustomersDetails(this.page);
    this.registeredCustomers = new RegisteredCustomers(this.page);
  }

  public async gotoHomePage(url: string) {
    await this.page.goto(url);
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
