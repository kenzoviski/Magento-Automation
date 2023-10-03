import { expect, Page } from "@playwright/test";

export default class NavigationBar {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Array of strings (menu/submenu/subsubmenu)
  menuTexts = [
    { menuText: "What's New", subMenuTexts: [] },
    {
      menuText: "Women",
      subMenuTexts: [
        {
          subMenuText: "Tops",
          subSubMenuTexts: [
            "Jackets",
            "Hoodies & Sweatshirts",
            "Tees",
            "Bras & Tanks",
          ],
        },
        { subMenuText: "Bottoms", subSubMenuTexts: ["Pants", "Shorts"] },
      ],
    },
    {
      menuText: "Men",
      subMenuTexts: [
        {
          subMenuText: "Tops",
          subSubMenuTexts: [
            "Jackets",
            "Hoodies & Sweatshirts",
            "Tees",
            "Tanks",
          ],
        },
        { subMenuText: "Bottoms", subSubMenuTexts: ["Pants", "Shorts"] },
      ],
    },
    {
      menuText: "Gear",
      subMenuTexts: [
        { subMenuText: "Bags", subSubMenuTexts: [] },
        { subMenuText: "Fitness Equipment", subSubMenuTexts: [] },
        { subMenuText: "Watches", subSubMenuTexts: [] },
      ],
    },
    {
      menuText: "Training",
      subMenuTexts: [{ subMenuText: "Video Download", subSubMenuTexts: [] }],
    },
    { menuText: "Sale", subMenuTexts: [] },
  ];

  // Actions

  // Regex expression to treat locator wildcards
  private regexLocatorTreatment(text: string) {
    const x = this.page.getByRole("menuitem", {
      name: new RegExp(`^.*${text}$`),
    });
    return x;
  }

  // Introduzir o 3º submenu

  // Function to iterate through an array of menu texts and hover over each
  async hoverMenus(
    page: Page,
    menuTexts: {
      menuText: string;
      subMenuTexts: { subMenuText: string; subSubMenuTexts?: string[] }[];
    }[]
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
    subMenuTexts?: { subMenuText: string; subSubMenuTexts?: string[] }[] // Update the parameter type
  ): Promise<void> {
    // Use getByRole with a regex to match the exact word, allowing for optional leading characters
    const menu = this.regexLocatorTreatment(menuText);

    // Hover over the menu
    await menu.hover();

    // Assert the existence of the menu
    await expect(menu).toBeVisible();

    // If subMenuTexts are provided, hover over the submenus
    if (subMenuTexts) {
      for (const { subMenuText, subSubMenuTexts } of subMenuTexts) {
        const subMenu = this.regexLocatorTreatment(subMenuText);

        await subMenu.hover();
        await expect(subMenu).toBeVisible();

        // If subSubMenuTexts are provided, hover over the subsubmenus
        if (subSubMenuTexts) {
          for (const subSubMenuText of subSubMenuTexts) {
            const subSubMenu = this.regexLocatorTreatment(subSubMenuText);

            await subSubMenu.hover();
            await expect(subSubMenu).toBeVisible();
          }
        }
      }
    }
  }
}
