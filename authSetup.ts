import { Page, Browser, chromium } from "@playwright/test";
import Customers from "@pages/3. Customer Login.page";

async function authSetup() {
  const browser: Browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://magento.softwaretestingboard.com/");

  // Auth
  const customers = new Customers(page);
  await customers.signIn();
  await customers.assertSignedIn();

  // Storage state
  await page.context().storageState({ path: "./LoginAuth.json" });

  // Browser close
  await browser.close();
}

export default authSetup;
