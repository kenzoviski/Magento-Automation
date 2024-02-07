import { expect, Page } from "@playwright/test";
import NewAccount from "@sections/5. Create New Customer Account_NewAccount.section";

export default class CreateNewAccount {
  page: Page;
  newAccount: NewAccount;

  constructor(page: Page) {
    this.page = page;
    this.newAccount = new NewAccount(this.page);
  }

  // Actions
  public async createNewAccount(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    await this.newAccount.textboxFirstName().fill(firstName);
    await this.newAccount.textboxLastName().fill(lastName);
    await this.newAccount.textboxEmail().fill(email);
    await this.newAccount.textboxPassword().fill(password);
    await this.newAccount.textboxConfirmPassword().fill(password);
    await this.newAccount.buttonCreateAnAccount().click();
  }

  public async assertCreateNewAccountSection() {
    await expect(
      this.newAccount.headerCreateNewCustomerAccount()
    ).toBeVisible();
    await expect(this.newAccount.textPersonalInformation()).toBeVisible();
    await expect(this.newAccount.textFirstName()).toBeVisible();
    await expect(this.newAccount.textboxFirstName()).toBeVisible();
    await expect(this.newAccount.testLastName()).toBeVisible();
    await expect(this.newAccount.textboxLastName()).toBeVisible();
    await expect(this.newAccount.textSignInInformation()).toBeVisible();
    await expect(this.newAccount.textEmail()).toBeVisible();
    await expect(this.newAccount.textboxEmail()).toBeVisible();
    await expect(this.newAccount.textPassword()).toBeVisible();
    await expect(this.newAccount.textboxPassword()).toBeVisible();
    await expect(this.newAccount.textConfirmPassword()).toBeVisible();
    await expect(this.newAccount.textPasswordStrength()).toBeVisible();
    await expect(this.newAccount.textboxConfirmPassword()).toBeVisible();
    await expect(this.newAccount.buttonCreateAnAccount()).toBeVisible();
  }

  public async assertCreateNewAccountSuccess() {
    await expect(this.newAccount.textMessageNewAccount()).toBeVisible();
  }
}
