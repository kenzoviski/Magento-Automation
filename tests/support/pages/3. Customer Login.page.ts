import { expect, Page } from "@playwright/test";
import NewCustomersDetails from "@sections/3. Customer Login_NewCustomers.section";
import RegisteredCustomers from "@sections/3. Customer Login_RegisteredCustomers.section";

export default class Customers {
  page: Page;
  newCustomersDetails: NewCustomersDetails;
  registeredCustomers: RegisteredCustomers;

  constructor(page: Page) {
    this.page = page;
    this.newCustomersDetails = new NewCustomersDetails(this.page);
    this.registeredCustomers = new RegisteredCustomers(this.page);
  }

  // Actions

  public async signIn() {
    const email = "layola4512@elixirsd.com";
    const password = "Kenzopila86";

    await this.registeredCustomers.linkSignIn().click();
    await this.registeredCustomers.labelEmail().click();
    await this.registeredCustomers.labelEmail().fill(email);
    await this.registeredCustomers.labelPassword().click();
    await this.registeredCustomers.labelPassword().fill(password);
    await this.registeredCustomers.buttonSignIn().click();
  }

  public async assertSignIn() {
    await expect(this.registeredCustomers.roleBanner()).toBeVisible();
  }
}
