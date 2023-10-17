import { expect, Page } from "@playwright/test";
import ForgotYourPasswordDetails from "@sections/4. Forgot Your Password.section";

export default class ForgotYourPassword {
  page: Page;
  forgotYourPassword: ForgotYourPassword;
  forgotYourPasswordDetails: ForgotYourPasswordDetails;

  constructor(page: Page) {
    this.page = page;
    this.forgotYourPassword = new ForgotYourPassword(this.page);
    this.forgotYourPasswordDetails = new ForgotYourPasswordDetails(this.page);
  }

  // Actions

  public async resetMyPassword() {
    // await this.forgotYourPasswordDetails.
  }

  public async assertReserMyPasswordSection() {
    await expect(
      this.forgotYourPasswordDetails.textMessageReserMyPassword()
    ).toBeVisible();
    await expect(this.forgotYourPasswordDetails.labelEmail()).toBeVisible();
    await expect(this.forgotYourPasswordDetails.textboxEmail()).toBeVisible();
    await expect(
      this.forgotYourPasswordDetails.buttonResetMyPassword()
    ).toBeVisible();
  }
}
