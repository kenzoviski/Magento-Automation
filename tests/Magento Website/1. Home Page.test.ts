import { test, expect } from "@playwright/test";
import titlePage from "@utils/utils";

// Makes variable global on this test.
let TitlePage;

test.beforeEach(async ({ page }) => {
  // Opens the URL defined in playwright.config.ts before each test
  await page.goto("/");

  // Creates a new instance of the TitlePage class before each test.
  TitlePage = new titlePage(page);
});

test("Title", async ({}) => {
  // Expects page to have a title with the name of "Home Page".
  const expectedTitleTitle = "Home Page";
  const pageTitle = await TitlePage.getTitle();
  expect(pageTitle).toBe(expectedTitleTitle);

  // **Deprecated Function**
  // const expectedTitle = 'Home Page';
  // const isTitleValid = await assertPageTitle(page, expectedTitle);
  // expect(isTitleValid).toBeTruthy();
});

test("Default bar", async ({ page }) => {
  // Assert default-bar texts
  expect(
    await expect(page.getByText("Default welcome msg!").first()).toBeVisible()
  );
  expect(await expect(page.getByText("Sign In").first()).toBeVisible());
  expect(
    await expect(page.getByText("Create an Account").first()).toBeVisible()
  );
});

test("Search bar and Cart icon", async ({ page }) => {
  //Search bar code
  // Wait for the element with the specified locator to become present
  const searchBarMessageElement = await page.getByPlaceholder(
    "Search entire store here..."
  );

  // Assert that the element is not null
  expect(searchBarMessageElement).not.toBeNull();

  //Cart icon
  const cartElement = await page.getByRole("link", { name: " My Cart" });

  // Assert that the cart icon element is not null
  expect(cartElement).not.toBeNull();
});

test("Logo is visible", async ({ page }) => {
  // Expects the home page to have the logo.
  const pageLogo = await page.getByLabel("store logo");
  await expect(pageLogo).toBeVisible();
});

// This only works if headless: false on playwright.config.ts. This is not meant for Playwright Runner extension (the extension always override configs)
// test.afterEach(async ({ browser }) => {
//   browser.close();
// });