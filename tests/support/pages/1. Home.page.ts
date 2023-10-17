import { expect, Page } from "@playwright/test";
import DefaultBarDetails from "@sections/1. Home_DefaultBar.section";

export default class Home {
  page: Page;
  defaultBarDetails: DefaultBarDetails;

  constructor(page: Page) {
    this.page = page;
    this.defaultBarDetails = new DefaultBarDetails(this.page);
  }

  // Actions
  public async clickSignIn() {
    await this.defaultBarDetails.buttonSignIn().click();
  }

  public async clickCreateAnAccount() {
    await this.defaultBarDetails.buttonCreateAnAccount().click();
  }

  // Asserts
  public async assertWelcomeMessage() {
    await expect(this.defaultBarDetails.banner()).toBeVisible();
  }

  public async assertbuttonSignIn() {
    await expect(this.defaultBarDetails.buttonSignIn()).toBeVisible();
  }

  public async assertbuttonCreateAnAccount() {
    await expect(this.defaultBarDetails.buttonCreateAnAccount()).toBeVisible();
  }

  public async assertLogo() {
    await expect(this.defaultBarDetails.imageLogo()).toBeVisible();
  }

  public async assertSearchBar() {
    await expect(this.defaultBarDetails.barSearchBar()).toHaveAttribute(
      "placeholder",
      "Search entire store here..."
    );
  }

  public async assertCartIcon() {
    await expect(this.defaultBarDetails.iconCart()).toBeVisible();
  }
}
