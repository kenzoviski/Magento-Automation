import { expect, defineConfig } from "@playwright/test";
import { test } from "@fixtures/basePage";
import titlePage from "@utils/genericUtils";

import DefaultBarActions from "@sections/defaultBarActions.section";
import DefaultBarDetails from "@sections/defaultBarDetails.section";

// Makes variable global on this test.
let TitlePage;

test.beforeEach(async ({ page, home }) => {
  // Opens the URL defined in home.page before each test
  await home.goto();

  // Creates a new instance of the TitlePage class before each test.
  TitlePage = new titlePage(page);
});

test("Title of home page", async ({}) => {
  // Expects page to have a title with the name of "Home Page".
  const pageTitle = await TitlePage.getTitle();
  await expect(pageTitle).toBe("Home Page");
});

test.describe("Default bar menu", () => {
  test("Welcome message", async ({ page, home }) => {
    // Default welcome message
    await home.assertWelcomeMessage();

    const banner = page.getByRole("banner").getByText("Default welcome msg!");
    await expect(banner).toBeVisible();
    await banner.click();
  });
  test("Sign in button", async ({ page }) => {
    // Sign in button
    const signIn = page.getByRole("link", { name: "Sign In" });
    await signIn.click();

    //Assert page title
    const pageTitle = await TitlePage.getTitle();
    await expect(pageTitle).toBe("Customer Login");
  });
  test("Create an Account", async ({ page }) => {
    // Create an Account
    const createAnAccount = page.getByRole("link", {
      name: "Create an Account",
    });
    await createAnAccount.click();

    //Assert page title
    const pageTitle = await TitlePage.getTitle();
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
