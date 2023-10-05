import { test } from "@fixtures/basePage";

let url: string;

test.beforeEach(async ({ page }) => {
  url = "https://magento.softwaretestingboard.com/";
  await page.goto(url);
});

test("Cycle through navigation bar and assert all menus, submenus and subsubmenus", async ({
  navigationBar,
  navigationBarDetails,
}) => {
  // Call the function to iterate automatically through all menus, submenus and subsubmenus
  await navigationBar.assertMenusExistence(navigationBarDetails.arrayCycleMenu);
});

// Open page through each menu (navigation bar), submenu and subsubmenu and assert the URL
test("Menu \"What's New", async ({ navigationBar }) => {
  await navigationBar.assertNavigationToPage("What's New");
});

test.describe("Women menu, submenus and subsubmenus)", () => {
  test("Menu Women", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women");
  });

  test("Menu Women->Tops", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Tops");
  });

  test("Menu Women->Tops->Jackets", async ({
    navigationBar,
    navigationBarDetails,
  }) => {
    await navigationBar.assertNavigationToPage("Women", "Tops", "Jackets");
    //Example using a nested array to specify the position of "Jackets"
    // await navigationBar.assertNavigationToPage(
    //   navigationBarDetails.arrayNestedMenu[1].menuText,
    //   navigationBarDetails.arrayNestedMenu[1].subMenuTexts[0].subMenuText,
    //   navigationBarDetails.arrayNestedMenu[1].subMenuTexts[0].subSubMenuTexts[0]
    // );
  });

  test("Menu Women->Tops->Hoodies & Sweatshirts", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage(
      "Women",
      "Tops",
      "Hoodies & Sweatshirts"
    );
  });

  test("Menu Women->Tops->Tees", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Tops", "Tees");
  });

  test("Menu Women->Tops->Bras & Tanks", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Tops", "Bras & Tanks");
  });
});

test.describe("Women menu, submenus and subsubmenus)", () => {
  test("Menu Men", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men");
  });
});
