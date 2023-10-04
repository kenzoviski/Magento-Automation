import { expect, Page } from "@playwright/test";
import NavigationBarDetails from "@sections/2. Navigation Bar.section";

export default class NavigationBar {
  page: Page;
  navigationBarDetails: NavigationBarDetails;

  constructor(page: Page) {
    this.page = page;
    this.navigationBarDetails = new NavigationBarDetails(this.page);
  }

  // Actions

  // Function to iterate through an array of menu texts and hover over each
  public async assertMenusExistence(
    menuTexts: {
      menuText: string;
      subMenuTexts: { subMenuText: string; subSubMenuTexts?: string[] }[];
    }[]
  ): Promise<void> {
    for (const { menuText, subMenuTexts } of menuTexts) {
      if (subMenuTexts && subMenuTexts.length > 0) {
        // If subMenuTexts are provided and not empty, call hoverAndAssertMenu with submenus
        await this.hoverAndAssertMenu(menuText, subMenuTexts);
      } else {
        // Otherwise, call hoverAndAssertMenu without submenus
        await this.hoverAndAssertMenu(menuText);
      }
    }
  }

  // Function to hover over and assert the existence of a menu by text
  public async hoverAndAssertMenu(
    menuText: string,
    subMenuTexts?: { subMenuText: string; subSubMenuTexts?: string[] }[]
  ): Promise<void> {
    // Use getByRole with a regex to match the exact word, allowing for optional leading characters
    const menu = this.navigationBarDetails.regexLocatorTreatment(menuText);

    // Hover over the menu and assert it's existence
    await menu.hover();
    await expect(menu).toBeVisible();

    // If subMenuTexts are provided, hover over the submenus and assert it's existence
    if (subMenuTexts) {
      for (const { subMenuText, subSubMenuTexts } of subMenuTexts) {
        // Use getByRole with a regex to match the exact word, allowing for optional leading characters
        const subMenu =
          this.navigationBarDetails.regexLocatorTreatment(subMenuText);

        // Hover over the menu and assert it's existence
        await subMenu.hover();
        await expect(subMenu).toBeVisible();

        // If subSubMenuTexts are provided, hover over the subsubmenus
        if (subSubMenuTexts) {
          for (const subSubMenuText of subSubMenuTexts) {
            // Regex expression to treat special characters at the start of the locator string
            const subSubMenu =
              this.navigationBarDetails.regexLocatorTreatment(subSubMenuText);

            // Hover over the menu and assert it's existence
            await subSubMenu.hover();
            await expect(subSubMenu).toBeVisible();
          }
        }
      }
    }
  }

  public async navigateToMenu(
    menuText: string,
    subMenuText?: string,
    subSubMenuText?: string
  ) {
    const menuLocator =
      this.navigationBarDetails.regexLocatorTreatment(menuText);
    const subMenuLocator =
      this.navigationBarDetails.regexLocatorTreatment(subMenuText);
    const subSubMenuLocator =
      this.navigationBarDetails.regexLocatorTreatment(subSubMenuText);

    if (menuText) {
      await menuLocator.hover();

      if (subMenuText) {
        await subMenuLocator.hover();

        if (subSubMenuText) {
          await subSubMenuLocator.hover();
          await subSubMenuLocator.click();
        } else {
          await subMenuLocator.click();
        }
      } else if (!subSubMenuText) {
        await menuLocator.click();
      }
    }
  }

  public async assertNavigationToPage(
    menuPage: string,
    subMenu?: string,
    subSubMenu?: string
  ) {
    // Navigate to menu
    await this.navigateToMenu(menuPage, subMenu, subSubMenu);

    // Get the expected URL based on the menu, submenu, and subsubmenu
    const expectedURL = this.getExpectedURL(menuPage, subMenu, subSubMenu);

    // Wait for the expected URL
    await this.page.waitForURL(expectedURL);
  }

  // Function to get the expected URL based on menu, submenu, and subsubmenu
  private getExpectedURL(
    menuPage: string,
    subMenu: string,
    subSubMenu: string
  ): string {
    if (subSubMenu) {
      return (
        this.navigationBarDetails.subsubmenuURLs[menuPage]?.[subMenu]?.[
          subSubMenu
        ] || ""
      );
    } else if (subMenu) {
      return this.navigationBarDetails.submenuURLs[menuPage]?.[subMenu] || "";
    } else {
      return this.navigationBarDetails.menuURLs[menuPage] || "";
    }
  }
}
