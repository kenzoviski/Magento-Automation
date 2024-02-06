import { expect, Page } from "@playwright/test";
import SearchPageDetails from "@sections/6. SearchPage.section";

export default class SearchPage {
  page: Page;
  searchPageDetails: SearchPageDetails;

  constructor(page: Page) {
    this.page = page;
    this.searchPageDetails = new SearchPageDetails(this.page);
  }

  // Actions

  public async searchBar(text: string) {
    //await this.searchPageDetails.searchLocator().click();
    await this.searchPageDetails.searchLocator().fill(text);
    await this.searchPageDetails.searchLocator().press("Enter");
  }

  public async assertSearchedPage() {
    await expect(this.searchPageDetails.searchPageMessage()).toBeVisible();
  }
}
