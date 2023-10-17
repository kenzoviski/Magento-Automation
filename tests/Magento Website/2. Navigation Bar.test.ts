import { test } from "@fixtures/basePage";

let url: string;

test.beforeEach(async ({ page, context }) => {
  url = "https://magento.softwaretestingboard.com/";
  await context.clearCookies();
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

// Women
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

  test("Menu Women->Bottoms", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Bottoms");
  });

  test("Menu Women->Bottoms->Pants", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Bottoms", "Pants");
  });

  test("Menu Women->Bottoms->Shorts", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Women", "Bottoms", "Shorts");
  });
});

// Men
test.describe("Men menu, submenus and subsubmenus)", () => {
  test("Menu Men", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men");
  });

  test("Menu Men->Tops", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Tops");
  });

  test("Menu Men->Tops->Jackets", async ({
    navigationBar,
    navigationBarDetails,
  }) => {
    await navigationBar.assertNavigationToPage("Men", "Tops", "Jackets");
  });

  test("Menu Men->Tops->Hoodies & Sweatshirts", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage(
      "Men",
      "Tops",
      "Hoodies & Sweatshirts"
    );
  });

  test("Menu Men->Tops->Tees", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Tops", "Tees");
  });

  test("Menu Men->Tops->Tanks", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Tops", "Tanks");
  });

  test("Menu Men->Bottoms", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Bottoms");
  });

  test("Menu Men->Bottoms->Pants", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Bottoms", "Pants");
  });

  test("Menu Men->Bottoms->Shorts", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Men", "Bottoms", "Shorts");
  });
});

test.describe("Gear menu and submenu", () => {
  test("Menu Gear", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Gear");
  });

  test("Menu Gear->Bags", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Gear", "Bags");
  });

  test("Menu Gear->Fitness Equipment", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Gear", "Fitness Equipment");
  });

  test("Menu Gear->Watches", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Gear", "Watches");
  });
});

test.describe("Training menu and submenu", () => {
  test("Menu Training", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Training");
  });

  test("Menu Training->Video Download", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Training", "Video Download");
  });
});

test.describe("Sale menu", () => {
  test("Menu Sale", async ({ navigationBar }) => {
    await navigationBar.assertNavigationToPage("Sale");
  });
});
