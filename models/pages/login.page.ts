import { Locator, Page } from "@playwright/test";

export default class LoginPage {
  page: Page;

  element: {
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.element = {
      usernameField: this.page.locator("#user-name"),
      passwordField: this.page.locator("#password"),
      loginButton: this.page.locator("#login-button"),
    };
  }

  public async goto() {
    await this.page.goto("/");
  }

  private async inputText(field: Locator, text: string) {
    await field.fill(text);
  }

  public async inputUserName(text: string) {
    await this.inputText(this.element.usernameField, text);
  }

  public async inputPassword(text: string) {
    await this.inputText(this.element.passwordField, text);
  }

  public async clickLoginButton() {
    await this.element.loginButton.click();
  }
}
