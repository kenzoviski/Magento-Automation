import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in playwright.config.ts before each test
  await context.clearCookies();
  await page.goto("/");
});

test("Search bar", async ({ page }) => {
  // Expects page to have a search bar and searching for something navigates to the corresponding webpage.
  const searchLocator = page.getByPlaceholder("Search entire store here...");
  await searchLocator.fill("Yoga");
  await searchLocator.press("Enter");
});
