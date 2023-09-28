import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page }) => {
  // Opens the URL defined in home.page before each test
  const url =
    "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ2luLw%2C%2C/";
  await page.goto(url);
});

test("Title of home page", async ({ utils }) => {
  // Expects page to have a title with the name of "Customer Login".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Customer Login");
});

test.describe("Registered Customers", () => {
  test("Customer Login Page", async ({ page }) => {
    // Click the 'Sign In'
    await page.getByRole("link", { name: "Sign In" }).click(); //Locator by using the name

    // Expects page to have a heading with the name of Customer Login.
    await expect(
      page.getByRole("heading", { name: "Customer Login" })
    ).toBeVisible();
  });

  test("E-mail", async ({ page }) => {
    // Click the 'Sign In' link.
    await page.getByRole("link", { name: "Sign In" }).click();

    // Wait for the email CSS selector input to be visible and click it.
    const emailInput = "123@gmail.com";
    const emailLocator = page.locator("#email");
    await emailLocator.click();

    // Type the email address.
    await emailLocator.type(emailInput);

    // Validate that the email input now contains the typed value.
    await expect(emailLocator).toHaveValue("123@gmail.com");
  });
});

// Snippets
// await page.goto('https://magento.softwaretestingboard.com/');
// await page.getByRole('link', { name: 'Sign In' }).click();
// await page.getByLabel('Email', { exact: true }).click();
// await page.getByLabel('Email', { exact: true }).fill('123@gmail.com');
// await page.getByLabel('Password').click();
// await page.getByLabel('Password').fill('123ABC');
// await page.getByRole('button', { name: 'Sign In' }).click();
// await page.getByText('The account sign-in was incorrect or your account is disabled temporarily. Pleas').click();
