import { test, expect } from "@playwright/test";
import LoginPage from "../models/pages/login.page";

test("Test Successful login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");

  await loginPage.inputUserName("standard_user");
  await loginPage.inputPassword("secret_sauce");
  await loginPage.clickLoginButton();

  await expect(page.locator(".inventory_list")).toBeVisible();
});
