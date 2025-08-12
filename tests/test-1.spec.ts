import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'بحث' }).dblclick();
});

test("test-2" , async ({page})=>
  {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'بحث' }).click();
  }) ;
