import { test, expect } from "@playwright/test";
import LoginPage from "../models/pages/login.page";
import InventoryListPage from "../models/pages/inventoryList.page";

test("Test Successful login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");

  await loginPage.inputUserName("standard_user");
  await loginPage.inputPassword("secret_sauce");
  await loginPage.clickLoginButton();

  await expect(page.locator(".inventory_list")).toBeVisible();
});

test("Check inventory Items Count", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");

  await loginPage.inputUserName("standard_user");
  await loginPage.inputPassword("secret_sauce");
  await loginPage.clickLoginButton();

  const inventoryItemsPage = new InventoryListPage(page);

  console.log(await inventoryItemsPage.getInventoryItemsCount());
  const item = inventoryItemsPage.getInventoryItemByName("Sauce Labs Onesie");

  console.log(await item.element.itemTitle.textContent());
  console.log(await item.element.itemDescription.textContent());
  console.log(await item.element.itemPrice.textContent());

  const itemByIndex = inventoryItemsPage.getInventoryItemByIndex(1);
  console.log(await itemByIndex.element.itemTitle.textContent());
  console.log(await itemByIndex.element.itemDescription.textContent());
  console.log(await itemByIndex.element.itemPrice.textContent());
});
