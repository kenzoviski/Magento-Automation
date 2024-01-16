import { Page } from "@playwright/test";

export default class DefaultBarDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  banner = () =>
    this.page
      .getByRole("banner")
      .getByText(
        "Click “Write for us” link in the footer to submit a guest post"
      );
  buttonSignIn = () => this.page.getByRole("link", { name: "Sign In" });
  buttonCreateAnAccount = () =>
    this.page.getByRole("link", { name: "Create an Account" });
  imageLogo = () => this.page.getByLabel("store logo");
  barSearchBar = () =>
    this.page.getByPlaceholder("Search entire store here...");
  iconCart = () => this.page.getByRole("link", { name: " My Cart" });
}
