import { chromium } from "@playwright/test"
import path from 'path';

async function globalSetup() 



//Login
{

    console.log('>>> Running global setup...');

    
    // Add The Page Fixture manullay Sequentailly 
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "load" })
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // important: wait for login success
    // Save The Storage State And Add It At Specific Path 

    await page.context().storageState({ path: "./playwright/.auth/auth3.json" })


}

export default globalSetup
