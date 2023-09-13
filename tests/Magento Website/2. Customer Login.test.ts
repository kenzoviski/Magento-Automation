import { test, expect } from '@playwright/test';

test('Customer Login Page', async ({ page }) => {
    // Opens Chromium on the URL defined in global-setup.
    await page.goto('/');
  
    // Click the 'Sign In' link.
    // const signInLocator = page.locator("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a");
    // await signInLocator.click();
    await page.getByRole('link', { name: 'Sign In' }).click(); //Locator by using the name
  
    // Expects page to have a heading with the name of Customer Login.
    await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
  });

  test ('E-mail', async ({ page }) => {
    // Opens Chromium on the URL defined in global-setup.
    await page.goto('/');
  
    // Click the 'Sign In' link.
    await page.getByRole('link', { name: 'Sign In' }).click();
  
    // Wait for the email CSS selector input to be visible and click it.
    const emailInput = '123@gmail.com';
    const emailLocator = page.locator('#email');
    await emailLocator.click();
  
    // Type the email address.
    await emailLocator.type(emailInput);
  
    // Validate that the email input now contains the typed value.
    await expect(emailLocator).toHaveValue('123@gmail.com');
  
  }); 
  
  // This only works if headless: false on playwright.config.ts. This is not meant for Playwright Runner extension (the extension always override configs)
// test.afterEach(async ({ browser }) => {
//   browser.close();
// });
  
  // Snippets
  // await page.goto('https://magento.softwaretestingboard.com/');
  // await page.getByRole('link', { name: 'Sign In' }).click();
  // await page.getByLabel('Email', { exact: true }).click();
  // await page.getByLabel('Email', { exact: true }).fill('123@gmail.com');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('123ABC');
  // await page.getByRole('button', { name: 'Sign In' }).click();
  // await page.getByText('The account sign-in was incorrect or your account is disabled temporarily. Pleas').click();