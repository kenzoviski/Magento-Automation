import { Page } from "@playwright/test";

export default class RegisteredCustomersDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  linkSignIn = () => this.page.getByRole("link", { name: "Sign In" });
  roleBanner = () =>
    this.page.getByRole("banner").getByText("Welcome, Test Mage QA!");
  textHeader = () => this.page.getByText("Customer Login");
  textRegisteredCustomers = () =>
    this.page.getByRole("heading", { name: "Registered Customers" });
  textMessageToSignInWithExistentAccount = () =>
    this.page.getByText(
      "If you have an account, sign in with your email address."
    );
  labelEmail = () => this.page.getByText("Email", { exact: true });
  textboxEmail = () => this.page.getByLabel("Email", { exact: true });
  labelPassowrd = () =>
    this.page.locator("#maincontent").getByText("Password", { exact: true });
  textboxPassword = () => this.page.getByLabel("Password");
  buttonSignIn = () => this.page.getByRole("button", { name: "Sign In" });
  roleForgotYourPassowrd = () =>
    this.page.getByRole("link", { name: "Forgot Your Password?" });
}
