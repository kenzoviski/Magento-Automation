import { expect, defineConfig } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle: any;
let url: string;

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in home.page before each test
  url = "https://magento.softwaretestingboard.com/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils }) => {
  // Expects page to have a title with the name of "Home Page".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Home Page");
});

test.describe("Default bar menu", () => {
  test("Welcome message", async ({ home }) => {
    // Assert default welcome message
    await home.assertWelcomeMessage();
  });

  test("Sign in button", async ({ page, home }) => {
    url =
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/";

    // Assert SignIn button
    await home.assertbuttonSignIn();
    await home.clickSignIn();

    // Assert the "Customer Login" page to be loaded
    await page.waitForURL(url);
  });

  test("Create an Account", async ({ page, home }) => {
    url = "https://magento.softwaretestingboard.com/customer/account/create/";

    // Assert CreateAnAccount button
    await home.assertbuttonCreateAnAccount();
    await home.clickCreateAnAccount();

    //Assert the "Ceate an Account" page to be loaded
    await page.waitForURL(url);
  });
});

test.describe("Logo, search bar and cart icon", () => {
  //Example of configure to be applied on a group of tests (retry 5 times with a timeout opf 5 seconds)
  test.describe.configure({ retries: 5, timeout: 15000 });
  test("Assertion to Logo, SearchBar and Cart icon", async ({ home }) => {
    // Assert Logo (visibility)
    await home.assertLogo();
    // Assert SearchBar (placeholder with string)
    await home.assertSearchBar();
    // Assert Cart icon (visibility)
    await home.assertCartIcon();
  });
});
