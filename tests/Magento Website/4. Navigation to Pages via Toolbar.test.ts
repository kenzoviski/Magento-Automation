import { test, expect } from "@playwright/test";
import { navigateToMenuItem } from "@utils/genericUtils";
import titlePage from "@utils/genericUtils";

// Makes variable global on this test.
let TitlePage;

test.beforeEach(async ({ page }) => {
  // Opens the URL defined in playwright.config.ts before each test
  await page.goto("/");

  // Creates a new instance of the TitlePage class before each test.
  TitlePage = new titlePage(page);
});

test('Navigate to "What\'s New" by hovering over menu and clicking', async ({
  page,
}) => {
  // Variables
  const title = "What's New";
  const locatorMenu = "#ui-id-3";

  // Wait for the content to load
  await navigateToMenuItem(page, locatorMenu);
  // Asserts the page Title
  const pageTitle = await TitlePage.getTitle();
  expect(pageTitle).toBe(title);
});

test('Navigate to "Women" by hovering over menu and clicking', async ({
  page,
}) => {
  // Variables
  const locatorMenu = "#ui-id-4";
  const expectedTitleOrHeader = "Women";

  await navigateToMenuItem(page, locatorMenu);

  // Asserts the page Title
  const pageTitle = await TitlePage.getTitle();
  expect(pageTitle).toBe(expectedTitleOrHeader);

  // Assert the page header
  const header = await page.getByLabel("Women").getByText("Women").innerText();
  expect(header).toBe(expectedTitleOrHeader);
});

test('Navigate to "Women-Tops" by hovering over submenu and clicking', async ({
  page,
}) => {
  //Variables
  const locatorMenu = "#ui-id-4";
  const locatorSubMenu = "#ui-id-9";
  const expectedHeader = "Tops";

  await navigateToMenuItem(page, locatorMenu, locatorSubMenu);

  // Assert the page header
  const header = await page.innerText("#page-title-heading");
  expect(header).toBe(expectedHeader);
});

// test('Navigate to "Women-Tops-Jackets" by hovering over subsubmenu and clicking', async ({
//   page,
// }) => {
//   await navigateToMenuItem(page, "Women", "Jackets");

//   // code
// });

// test('Navigate to "Women-Tops-Hoodies&Sweatshirts" by hovering over subsubmenu and clicking', async ({
//   page,
// }) => {
//   await navigateToMenuItem(page, "Women", "Hoodies&Sweatshirts");

//   // code
// });

// test('Navigate to "Women" by hovering over subsubmenu and clicking', async ({
//   page,
// }) => {
//   await navigateToMenuItem(page, "Women", "Jackets");
// });

// Other test cases...

// This only works if headless: false on playwright.config.ts. This is not meant for Playwright Runner extension (the extension always override configs)
// test.afterEach(async ({ browser }) => {
//   browser.close();
// });
