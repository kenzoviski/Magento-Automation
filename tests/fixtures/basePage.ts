import { test as base } from "@playwright/test";
import Home from "@pages/1. Home.page";
import NavigationBar from "@pages/2. Navigation Bar-Global.page";
import Utils from "@utils/Utils";

// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  home: Home;
  navigationBar: NavigationBar;
  utils: Utils;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  home: async ({ page }, use) => {
    await use(new Home(page));
  },
  navigationBar: async ({ page }, use) => {
    await use(new NavigationBar(page));
  },
  utils: async ({ page }, use) => {
    await use(new Utils(page));
  },
});
