import { Locator, Page } from "@playwright/test";
import InventoryItemSection from "../sections/inventoryItem.section";
import HamburgerMenuSection from "../sections/hamburgerMenu.section";

export default class InventoryListPage {
  page: Page;

  element: {
    inventoryItems: Locator;
    hamburgerMenu: HamburgerMenuSection;
  };

  constructor(page: Page) {
    this.page = page;
    this.element = {
      inventoryItems: this.page
        .locator(".inventory_list")
        .locator(".inventory_item"),
      hamburgerMenu: new HamburgerMenuSection(
        this.page.locator("#menu_button_container"),
      ),
      //this.page.locator(".menu_button_container"),
    };
  }

  public getInventoryItemByIndex(index: number): InventoryItemSection {
    return new InventoryItemSection(this.element.inventoryItems.nth(index - 1));
  }

  public getInventoryItemByName(itemName: string): InventoryItemSection {
    return new InventoryItemSection(
      this.element.inventoryItems.filter({ hasText: itemName }),
    );
  }

  public getInventoryItemsCount(): Promise<number> {
    return this.element.inventoryItems.count();
  }
}
