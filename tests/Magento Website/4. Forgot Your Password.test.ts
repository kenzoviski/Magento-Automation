import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page, context }) => {
  const url =
    "https://magento.softwaretestingboard.com/customer/account/forgotpassword/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of page", async ({ utils, context }) => {
  // Expects page to have a title with the name of "Forgot Your Password".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Forgot Your Password?");
});

test.describe("Forgot Your Password", () => {
  test("Forgot Your Password Page", async ({ forgotYourPassword }) => {
    await forgotYourPassword.assertReserMyPasswordSection();
  });
});
