import { expect, Page } from "@playwright/test";
import DefaultBarDetails from "@sections/1. Home_DefaultBar.section";

export default class Home {
  page: Page;
  defaultBarDetails: DefaultBarDetails;

  constructor(page: Page) {
    this.page = page;
    this.defaultBarDetails = new DefaultBarDetails(this.page);
  }

  public async gotoHomePage(url: string) {
    await this.page.goto(url);
  }

  // Actions
  public async assertWelcomeMessage() {
    await expect(this.defaultBarDetails.banner()).toBeVisible();
  }

  public async clickSignIn() {
    await this.defaultBarDetails.buttonSignIn().click();
  }

  public async clickCreateAnAccount() {
    await this.defaultBarDetails.buttonCreateAnAccount().click();
  }
}
