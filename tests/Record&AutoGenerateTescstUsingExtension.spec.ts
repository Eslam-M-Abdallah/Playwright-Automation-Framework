import { test, expect } from '@playwright/test';

//Auto Generated Code Using The Record Feature From Playwright Extension

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');

// If You Want To Record Snap Or Addtional Steps At The Current Test Scipt You Can Use Record a Cursor 

  await page.getByTestId('login-button').click();
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').click();
  await expect(page.getByTestId('shopping-cart-badge')).toContainText('1');
  await page.getByTestId('shopping-cart-link').click();
  await expect(page.getByTestId('remove-sauce-labs-backpack')).toBeVisible();
  await page.getByTestId('checkout').click();
});

