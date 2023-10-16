import { Page } from "@playwright/test";

export default class RegisteredCustomersDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  linkSignIn = () => this.page.getByRole("link", { name: "Sign In" });
  labelEmail = () => this.page.getByLabel("Email", { exact: true });
  labelPassword = () => this.page.getByLabel("Password");
  buttonSignIn = () => this.page.getByRole("button", { name: "Sign In" });
  roleBanner = () =>
    this.page.getByRole("banner").getByText("Welcome, Test Mage QA!");
}
