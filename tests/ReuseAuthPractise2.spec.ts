import {test ,expect} from "@playwright/test"

// Using The Save Authentication Details By Codegen 


/*test.beforeEach("Login Action", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "load" })
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})
*/
test("Verifiy Open The Leave Page Successfully",async({page})=>
    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible()
        await page.getByRole('link', { name: 'Leave' }).click();
        await page.waitForTimeout(2000)
        await expect(page.url()).toContain('/leave');
    })