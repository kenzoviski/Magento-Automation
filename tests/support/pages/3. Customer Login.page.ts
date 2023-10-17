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
    const password = "Magento1986";

    await this.registeredCustomers.linkSignIn().click();
    await this.registeredCustomers.textboxEmail().click();
    await this.registeredCustomers.textboxEmail().fill(email);
    await this.registeredCustomers.textboxPassword().click();
    await this.registeredCustomers.textboxPassword().fill(password);
    await this.registeredCustomers.buttonSignIn().click();
  }

  public async assertCustomerLoginSection() {
    await expect(
      this.registeredCustomers.textRegisteredCustomers()
    ).toBeVisible();
    await expect(
      this.registeredCustomers.textMessageToSignInWithExistentAccount()
    ).toBeVisible();
    await expect(this.registeredCustomers.labelEmail()).toBeVisible();
    await expect(this.registeredCustomers.labelPassowrd()).toBeVisible();
    await expect(this.registeredCustomers.buttonSignIn()).toBeVisible();
  }

  public async assertForgotYourPasswordNavigation() {
    const url =
      "https://magento.softwaretestingboard.com/customer/account/forgotpassword/";

    await expect(
      this.registeredCustomers.roleForgotYourPassowrd()
    ).toBeVisible();
    await this.registeredCustomers.roleForgotYourPassowrd().click();
    await this.page.waitForURL(url);
  }

  public async assertNewCustomersSection() {
    await expect(this.newCustomersDetails.textNewCustomers()).toBeVisible();
    await expect(
      this.newCustomersDetails.textMessageNewCustomers()
    ).toBeVisible();
    await expect(
      this.newCustomersDetails.buttonCreateAnAccount()
    ).toBeVisible();
  }

  public async assertSignedIn() {
    await expect(this.registeredCustomers.roleBanner()).toBeVisible();
  }
}
