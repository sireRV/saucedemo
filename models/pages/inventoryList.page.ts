import { Locator, Page } from "@playwright/test";
import InventoryItemSection from "../sections/inventoryItem.section";

export default class InventoryListPage {
  page: Page;

  element: {
    inventoryItems: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.element = {
      inventoryItems: this.page
        .locator(".inventory_list")
        .locator(".inventory_item"),
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
