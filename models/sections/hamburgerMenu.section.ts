import { Locator } from "@playwright/test";

export default class HamburgerMenuSection {
  private root: Locator;

  element: {
    hamburgerMenuButton: Locator;
    hamburgerMenu: Locator;
    closeHamburgerMenuButton: Locator;
    hamburgerMenuItems: Locator;
  };

  constructor(root: Locator) {
    this.root = root;

    this.element = {
      hamburgerMenuButton: this.root.locator("#react-burger-menu-btn"),
      hamburgerMenu: this.root.locator(".bm-menu-wrap"),
      closeHamburgerMenuButton: this.root.locator("#react-burger-cross-btn"),
      hamburgerMenuItems: this.root.locator(".bm-item.menu-item"),
    };
  }

  public async getBurgerMenuState(): Promise<string | null> {
    return await this.element.hamburgerMenu.getAttribute("aria-hidden");
  }

  public async openHamburgerMenu() {
    await this.element.hamburgerMenuButton.click();
  }

  public async closeHamburgerMenu() {
    await this.element.closeHamburgerMenuButton.click();
  }

  public async getHamburgerMenuItemsCount(): Promise<number> {
    return await this.element.hamburgerMenuItems.count();
  }

  public async clickHamburgerMenuItem(menuItem: string) {
    await this.element.hamburgerMenuItems.filter({ hasText: menuItem }).click();
  }
}
