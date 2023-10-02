import { test } from "@fixtures/basePage";

let url: string;

test.beforeEach(async ({ page }) => {
  url = "https://magento.softwaretestingboard.com/";
  await page.goto(url);
});

test("Cycle through navigation bar and assert all menus submenus subsubmenus", async ({
  navigationBar,
  page,
}) => {
  // Call the function to iterate through menus
  await navigationBar.hoverMenus(page, navigationBar.menuTexts);
});
