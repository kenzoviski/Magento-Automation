import { Page, Browser, chromium } from "@playwright/test";
import { test } from "@fixtures/basePage";
import Customers from "@pages/3. Customer Login.page";

async function authSetup() {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://magento.softwaretestingboard.com/");

  // Auth and assert
  const customers = new Customers(page);
  await customers.signIn();
  await customers.assertSignIn();

  // Storage state
  await page.context().storageState({ path: "./LoginAuth.json" });

  // Browser close
  await browser.close();
}

export default authSetup;
