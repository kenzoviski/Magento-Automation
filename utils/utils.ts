import { Page, Locator, expect } from "@playwright/test";

class titlePage {
  // Using Locator for the title element
  private titleElement: Locator;

  constructor(page: Page) {
    // Define the locator for the title element
    this.titleElement = page.locator("head > title");
  }

  async getTitle() {
    // Get the inner text of the title element
    return await this.titleElement.innerText();
  }
}
export default titlePage;

export async function navigateToMenuItem(
  page: Page,
  menu: string,
  submenu?: string,
  subsubmenu?: string
) {
  /*1st level*/
  const menuItem = await page.locator(menu);
  await menuItem.isVisible();
  await menuItem.hover();

  if (submenu /*2nd level*/) {
    const submenuItem = await page.locator(submenu);
    await submenuItem.isVisible();
    await submenuItem.hover();    
    if (subsubmenu /*3rd level*/) {
      //Do code here to navigate to 3rd level of menu
      const subsubmenuItem = await page.locator(subsubmenu);
      await subsubmenuItem.isVisible();
      await subsubmenuItem.hover();
      await subsubmenuItem.click();
    }
    else {
      await submenuItem.click();
    }

  } else {
    await menuItem.click();
  }
}
