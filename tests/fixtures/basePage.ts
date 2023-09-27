import { test as base } from "@playwright/test";
import Home from "@pages/home.page";
import titlePage from "@utils/genericUtils";

// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  home: Home;
  t;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  home: async ({ page }, use) => {
    await use(new Home(page));
  },
});
