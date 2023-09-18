import { test, expect, selectors } from "@playwright/test";

test("test example", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/#/");

  await page.pause();

  await page
    .getByPlaceholder("What needs to be done?")
    .fill("Subscribe to the newsletter");

  await page.getByPlaceholder("What needs to be done?").press("Enter");
});

test("test example #2", async ({ page }) => {
  await page.goto("https://www.amazon.co.uk/");
  await page.getByLabel("Accept Cookies").click();
  await page.getByRole("button", { name: "Submit" }).first().click();
  await page.getByRole("link", { name: "Music", exact: true }).click();
});
