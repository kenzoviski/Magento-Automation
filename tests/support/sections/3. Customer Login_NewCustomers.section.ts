import { Page } from "@playwright/test";

export default class NewCustomersDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  textNewCustomers = () =>
    this.page.getByRole("heading", { name: "New Customers" });
  textMessageNewCustomers = () =>
    this.page.getByText(
      "Creating an account has many benefits: check out faster, keep more than one addr"
    );
  buttonCreateAnAccount = () =>
    this.page
      .locator("#maincontent")
      .getByRole("link", { name: "Create an Account" });
}
