import { Locator, Page } from "@playwright/test";

export default class InventoryItemSection {
  root: Locator;

  element: {
    itemTitle: Locator;
    itemDescription: Locator;
    itemPrice: Locator;
    addToCartButton: Locator;
    removeButton: Locator;
  };

  constructor(root: Locator) {
    this.root = root;

    this.element = {
      itemTitle: this.root.locator(".inventory_item_name"),
      itemDescription: this.root.locator(".inventory_item_desc"),
      itemPrice: this.root.locator(".inventory_item_price"),
      addToCartButton: this.root
        .locator(".pricebar")
        .getByRole("button", { name: "Add to cart" }),
      removeButton: this.root
        .locator(".pricebar")
        .getByRole("button", { name: "Remove" }),
    };
  }

  public async addItemToCart() {
    await this.element.addToCartButton.click();
  }

  public async removeItemFromCart() {
    await this.element.removeButton.click();
  }
}
