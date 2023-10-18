import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page, context }) => {
  const url =
    "https://magento.softwaretestingboard.com/customer/account/forgotpassword/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils, context }) => {
  // Expects page to have a title with the name of "Forgot Your Password".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Forgot Your Password?");
});

test.describe("Forgot Your Password Page", () => {
  test("Forgot Your Password Section", async ({ forgotYourPassword }) => {
    await forgotYourPassword.assertReserMyPasswordSection();
  });

  test("Reset my password", async ({ forgotYourPassword }) => {
    const email = "layola4512@elixirsd.com";
    await forgotYourPassword.resetMyPassword(email);
    await forgotYourPassword.assertResetMyPassword(email);
  });
});
