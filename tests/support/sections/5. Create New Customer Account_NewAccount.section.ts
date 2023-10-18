import { Page } from "@playwright/test";

export default class NewAccount {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  headerCreateNewCustomerAccount = () =>
    this.page.getByText("Create New Customer Account");
  textPersonalInformation = () => this.page.getByText("Personal Information");
  textFirstName = () => this.page.getByText("First Name");
  textboxFirstName = () => this.page.getByLabel("First Name");
  testLastName = () => this.page.getByText("Last Name");
  textboxLastName = () => this.page.getByLabel("Last Name");
  textSignInInformation = () => this.page.getByText("Sign-in Information");
  textEmail = () => this.page.getByText("Email", { exact: true });
  textboxEmail = () => this.page.getByLabel("Email", { exact: true });
  textPassword = () =>
    this.page.locator("#form-validate").getByText("Password", { exact: true });
  textboxPassword = () =>
    this.page.getByRole("textbox", { name: "Password*", exact: true });
  textConfirmPassword = () => this.page.getByText("Confirm Password");
  textPasswordStrength = () =>
    this.page.getByText("Password Strength: No Password");
  textboxConfirmPassword = () => this.page.getByLabel("Confirm Password");
  buttonCreateAnAccount = () =>
    this.page.getByRole("button", { name: "Create an Account" });
}
