import { Page } from "@playwright/test";

export default class ForgotYourPasswordDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  textMessageReserMyPassword = () =>
    this.page.getByText(
      "Please enter your email address below to receive a password reset link."
    );
  labelEmail = () => this.page.getByText("Email", { exact: true });
  textboxEmail = () => this.page.getByLabel("Email", { exact: true });
  buttonResetMyPassword = () =>
    this.page.getByRole("button", { name: "Reset My Password" });
}
