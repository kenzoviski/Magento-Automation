import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in home.page before each test
  const url =
    "https://magento.softwaretestingboard.com/customer/account/create/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils }) => {
  // Expects page to have a title with the name of "Create New Customer Account".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Create New Customer Account");
});
