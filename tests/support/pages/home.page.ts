import { expect, Page } from "@playwright/test";
import DefaultBarActions from "@sections/defaultBarActions.section";
import DefaultBarDetails from "@sections/defaultBarDetails.section";

export default class Home {
  page: Page;
  defaultBarActions: DefaultBarActions;
  defaultBarDetails: DefaultBarDetails;

  constructor(page: Page) {
    this.page = page;
    this.defaultBarActions = new DefaultBarActions(this.page);
    this.defaultBarDetails = new DefaultBarDetails(this.page);
  }

  public async goto() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  // Locators
  banner = () =>
    this.page.getByRole("banner").getByText("Default welcome msg!");

  // Actions
  public async assertWelcomeMessage() {
    await expect(this.banner()).toBeVisible();
  }
}
