import { Page } from "@playwright/test";

export default class NavigationBarDetails {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Array of Menu (cycle through)
  arrayCycleMenu = [
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
        { subMenuText: "Bags" },
        { subMenuText: "Fitness Equipment" },
        { subMenuText: "Watches" },
      ],
    },
    {
      menuText: "Training",
      subMenuTexts: [{ subMenuText: "Video Download" }],
    },
    { menuText: "Sale", subMenuTexts: [] },
  ];

  // Array of nested Menu (to use specific position of menus. Just another approach)
  arrayNestedMenu = [
    { menuText: "What's New", subMenuTexts: [{ subSubMenuTexts: [] }] },
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
        { subMenuText: "Bags" },
        { subSubMenuTexts: [] },
        { subMenuText: "Fitness Equipment" },
        { subSubMenuTexts: [] },
        { subMenuText: "Watches" },
        { subSubMenuTexts: [] },
      ],
    },
    {
      menuText: "Training",
      subMenuTexts: [
        { subMenuText: "Video Download" },
        { subSubMenuTexts: [] },
      ],
    },
    { menuText: "Sale", subMenuTexts: [{ subSubMenuTexts: [] }] },
  ];

  // URLs
  // Main URL
  urlMain = "https://magento.softwaretestingboard.com/";

  // Define a mapping object for menu, submenu, and subsubmenu URLs
  menuURLs: Record<string, string> = {
    "What's New": this.urlMain + "what-is-new.html",
    Women: this.urlMain + "women.html",
    Men: this.urlMain + "men.html",
    Gear: this.urlMain + "gear.html",
    Training: this.urlMain + "training.html",
    Sale: this.urlMain + "sale.html",
  };

  submenuURLs: Record<string, Record<string, string>> = {
    Women: {
      Tops: this.urlMain + "women/tops-women.html",
      Bottoms: this.urlMain + "women/bottoms-women.html",
    },
    Men: {
      Tops: this.urlMain + "men/tops-men.html",
      Bottoms: this.urlMain + "men/bottoms-men.html",
    },
    Gear: {
      Bags: this.urlMain + "gear/bags.html",
      "Fitness Equipment": this.urlMain + "gear/fitness-equipment.html",
      Watches: this.urlMain + "gear/watches.html",
    },
    Training: {
      "Video Download": this.urlMain + "training/training-video.html",
    },
  };

  subsubmenuURLs: Record<string, Record<string, Record<string, string>>> = {
    Women: {
      Tops: {
        Jackets: this.urlMain + "women/tops-women/jackets-women.html",
        "Hoodies & Sweatshirts":
          this.urlMain + "women/tops-women/hoodies-and-sweatshirts-women.html",
        Tees: this.urlMain + "women/tops-women/tees-women.html",
        "Bras & Tanks": this.urlMain + "women/tops-women/tanks-women.html",
      },
      Bottoms: {
        Pants: this.urlMain + "women/bottoms-women/pants-women.html",
        Shorts: this.urlMain + "women/bottoms-women/shorts-women.html",
      },
    },
    Men: {
      Tops: {
        Jackets: this.urlMain + "men/tops-men/jackets-men.html",
        "Hoodies & Sweatshirts":
          this.urlMain + "men/tops-men/hoodies-and-sweatshirts-men.html",
        Tees: this.urlMain + "men/tops-men/tees-men.html",
        "Bras & Tanks": this.urlMain + "men/tops-men/tanks-men.html",
      },
      Bottoms: {
        Pants: this.urlMain + "men/bottoms-men/pants-men.html",
        Shorts: this.urlMain + "men/bottoms-men/shorts-men.html",
      },
    },
  };

  // Locators
  menuToCycle = () => this.page.getByRole("menuitem", { name: "What's New" });

  // Regex to match the exact word, allowing for optional leading characters
  public regexLocatorTreatment(text: string) {
    const x = this.page.getByRole("menuitem", {
      name: new RegExp(`^.*${text}$`),
    });
    return x;
  }
}
