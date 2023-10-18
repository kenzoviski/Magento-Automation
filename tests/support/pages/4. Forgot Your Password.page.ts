import { expect, Page } from "@playwright/test";
import ForgotYourPasswordDetails from "@sections/4. Forgot Your Password.section";

export default class ForgotYourPassword {
  page: Page;
  forgotYourPasswordDetails: ForgotYourPasswordDetails;

  constructor(page: Page) {
    this.page = page;
    this.forgotYourPasswordDetails = new ForgotYourPasswordDetails(this.page);
  }

  // Actions

  public async resetMyPassword(email: string) {
    await this.forgotYourPasswordDetails.textboxEmail().click();
    await this.forgotYourPasswordDetails.textboxEmail().fill(email);
    await this.forgotYourPasswordDetails.buttonResetMyPassword().click();
  }

  public async assertResetMyPassword(email: string) {
    const expectedMessage =
      "If there is an account associated with " +
      email +
      " you will receive an email with a link to reset your password.";

    const resetMyPasswordMessageLocator = this.page.locator(
      "text=" + expectedMessage
    );

    if (
      (await resetMyPasswordMessageLocator.textContent()) === expectedMessage
    ) {
      console.log(
        'Test success - "Reset my Password". Message matches the expected message.'
      );
    } else {
      console.error(
        'Test failed - "Reset my Password". Message does not match the expected message.'
      );
    }
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
