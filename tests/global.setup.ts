import { test, expect } from "@playwright/test"

test("Login Setup", async ({ page }) => {
    //Login 

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "load" })
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // important: wait for login success
    // Save The Storage State And Add It At Specific Path 

    await page.context().storageState({ path: "./playwright/.auth/auth4.json" })
})