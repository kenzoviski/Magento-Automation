import { Page } from "@playwright/test";

export default class SearchPageDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  searchLocator = () =>
    this.page.getByPlaceholder("Search entire store here...");
  searchPageMessage = () =>
    this.page
      .getByRole("heading", { name: "Search results for: 'Yoga'" })
      .locator("span");
}
