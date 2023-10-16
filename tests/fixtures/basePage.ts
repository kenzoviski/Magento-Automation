import { test as base } from "@playwright/test";
import Home from "@pages/1. Home.page";
import NavigationBar from "@pages/2. Navigation Bar.page";
import NavigationBarDetails from "@sections/2. Navigation Bar.section";
import Utils from "@utils/Utils";
import Customers from "@pages/3. Customer Login.page";

// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  home: Home;
  navigationBar: NavigationBar;
  navigationBarDetails: NavigationBarDetails;
  utils: Utils;
  customers: Customers;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  home: async ({ page }, use) => {
    await use(new Home(page));
  },
  navigationBar: async ({ page }, use) => {
    await use(new NavigationBar(page));
  },
  navigationBarDetails: async ({ page }, use) => {
    await use(new NavigationBarDetails(page));
  },
  utils: async ({ page }, use) => {
    await use(new Utils(page));
  },
  customers: async ({ page }, use) => {
    await use(new Customers(page));
  },
});
