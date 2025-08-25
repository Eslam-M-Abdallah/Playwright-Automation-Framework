import { test, expect } from "@playwright/test"

test("Reports Practise 4", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test("Reports Practise 5", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test("Reports Practise 6", async ({ page }) => {
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})