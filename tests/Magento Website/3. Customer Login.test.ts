import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in home.page before each test
  const url =
    "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ2luLw%2C%2C/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils, context }) => {
  // Expects page to have a title with the name of "Customer Login".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Customer Login");
});

test.describe("Registered Customers", () => {
  test("Customer Login Page", async ({ page, customers }) => {
    // Click the 'Sign In'
    // await page.getByRole("link", { name: "Sign In" }).click();
    // await page.getByLabel("Email", { exact: true }).click();
    // await page
    //   .getByLabel("Email", { exact: true })
    //   .fill("layola4512@elixirsd.com");
    // await page.getByLabel("Password").click();
    // await page.getByLabel("Password").fill("Kenzopila86");
    // await page.getByRole("button", { name: "Sign In" }).click();
    // await expect(
    //   page.getByRole("banner").getByText("Welcome, Test Mage QA!")
    // ).toBeVisible();
    // await page
    //   .getByRole("banner")
    //   .locator("button")
    //   .filter({ hasText: "Change" })
    //   .click();
    // await page.getByRole("link", { name: "Sign Out" }).click();
    // await expect(page.getByText("You are signed out")).toBeVisible();

    await customers.signIn();
    await customers.assertSignIn();
  });
});
