import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Opens the URL defined in playwright.config.ts before each test
    await page.goto("/");
  });

test('Search bar', async ({ page }) => {
    // Expects page to have a search bar and searching for something navigates to the corresponding webpage.
    const searchLocator = page.getByPlaceholder('Search entire store here...');
    
    await searchLocator.fill('Yoga');
    await searchLocator.press('Enter');
});


  // This only works if headless: false on playwright.config.ts. This is not meant for Playwright Runner extension (the extension always override configs)
// test.afterEach(async ({ browser }) => {
//     browser.close();
//   });