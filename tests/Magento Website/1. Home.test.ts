import { expect, defineConfig } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page }) => {
  // Opens the URL defined in home.page before each test
  const url = "https://magento.softwaretestingboard.com/";
  await page.goto(url);
});

test("Title of home page", async ({ utils }) => {
  // Expects page to have a title with the name of "Home Page".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Home Page");
});

test.describe("Default bar menu", () => {
  test("Welcome message", async ({ home }) => {
    // Default welcome message
    await home.assertWelcomeMessage();
  });

  test("Sign in button", async ({ page, utils, home }) => {
    const url =
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/";

    //Assert page title
    await expect(home.defaultBarDetails.buttonSignIn()).toBeVisible();
    await home.clickSignIn();

    //Assert the "Customer Login" page to be loaded
    await page.waitForURL(url);
  });

  // --------------------- Revamp from here
  test("Create an Account", async ({ page, home, utils }) => {
    const url =
      "https://magento.softwaretestingboard.com/customer/account/create/";

    //Assert page title
    await expect(home.defaultBarDetails.buttonCreateAnAccount()).toBeVisible();
    pageTitle = await utils.getTitle();
    await expect(pageTitle).toBe("Create New Customer Account");
  });
});

test.describe("Logo search bar and cart icon", () => {
  test.describe.configure({ retries: 5, timeout: 10000 });
  test("Logo", async ({ page }) => {
    const logo = page.getByLabel("store logo");
    await expect(logo).toBeVisible();
  });

  test("Search bar and Cart icon", async ({ page }) => {
    //Search bar code
    // Wait for the element with the specified locator to become present
    const searchBarMessageElement = await page.getByPlaceholder(
      "Search entire store here..."
    );

    // Assert that the element is not null
    await expect(searchBarMessageElement).not.toBeNull();

    //Cart icon
    const cartElement = await page.getByRole("link", { name: " My Cart" });

    // Assert that the cart icon element is not null
    await expect(cartElement).not.toBeNull();
  });
});

test("Logo is visible", async ({ page }) => {
  // Expects the home page to have the logo.
  const pageLogo = await page.getByLabel("store logo");
  await expect(pageLogo).toBeVisible();
});
