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
    await this.registeredCustomers.linkSignIn().click();
    await this.registeredCustomers.labelEmail().fill("layola4512@elixirsd.com");
    await this.registeredCustomers.labelPassword().fill("Kenzopila86");
    await this.registeredCustomers.buttonSignIn().click();
  }

  public async assertSignIn() {
    await expect(this.registeredCustomers.roleBanner()).toBeVisible({
      timeout: 15000, // Wait 15sec for visibility of the banner (sometimes page takes longer to load)
    });
  }
}
