import { expect, Page } from "@playwright/test";

export default class NavigationBar {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Array of strings (menu/submenu/subsubmenu)
  menuTexts = [
    { menuText: "What's New", subMenuTexts: [] },
    { menuText: "Women", subMenuTexts: ["Tops", "Bottoms"] },
    { menuText: "Men", subMenuTexts: ["Tops", "Bottoms"] },
    {
      menuText: "Gear",
      subMenuTexts: ["Bags", "Fitness Equipment", "Watches"],
    },
    { menuText: "Training", subMenuTexts: ["Video Download"] },
    { menuText: "Sale", subMenuTexts: [] },
  ];

  // Actions

  // Function to iterate through an array of menu texts and hover over each
  async hoverMenus(
    page: Page,
    menuTexts: { menuText: string; subMenuTexts: string[] }[]
  ): Promise<void> {
    for (const { menuText, subMenuTexts } of menuTexts) {
      if (subMenuTexts && subMenuTexts.length > 0) {
        // If subMenuTexts are provided and not empty, call hoverAndAssertMenu with submenus
        await this.hoverAndAssertMenu(page, menuText, subMenuTexts);
      } else {
        // Otherwise, call hoverAndAssertMenu without submenus
        await this.hoverAndAssertMenu(page, menuText);
      }
    }
  }

  // Function to hover over and assert the existence of a menu by text
  async hoverAndAssertMenu(
    page: Page,
    menuText: string,
    subMenuTexts?: string[] // Make subMenuTexts optional by using "?"
  ): Promise<void> {
    // Use getByRole with a regex to match the exact word, allowing for optional leading characters

    const menu = await page.getByRole("menuitem", {
      name: new RegExp(`^.*${menuText}$`),
    });

    // Hover over the menu
    await menu.hover();

    // Assert the existence of the menu
    await expect(menu).toBeVisible();

    // If subMenuTexts are provided, hover over the submenus
    if (subMenuTexts) {
      for (const subMenuText of subMenuTexts) {
        const subMenu = await page.getByRole("menuitem", {
          name: new RegExp(`^.*${subMenuText}$`),
        });

        await subMenu.hover();
        await expect(subMenu).toBeVisible();
      }
    }
  }
}
