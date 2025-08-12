import { test, expect } from '@playwright/test';

// Record & Auto Genrate The Tets Code Using The Command Line 

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('3');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toContainText('Remove');
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
});