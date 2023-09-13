// import { Page, ElementHandle, expect, Locator } from "@playwright/test";

// export async function navigateToMenuItem(
//   page: Page,
//   menu: string,
//   submenu?: string
// ) {
//   const menuItem = await page.waitForSelector(`text=${menu}`);
//   await menuItem.hover();

//   if (submenu) {
//     const submenuItem = await menuItem.waitForSelector(`text=${submenu}`);
//     await submenuItem.click();
//   } else {
//     await menuItem.click();
//   }
// }

// export async function navigateToPageFromMenu(
//   page: Page,
//   _title: string,
//   _locator: Locator
// ) {
//   // Wait for the content to load
//   await navigateToMenuItem(page, _title);
//   await _locator.waitFor();
// }
