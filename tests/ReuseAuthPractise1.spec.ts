import { test, expect } from "@playwright/test"

// Using The Save Authentication Details (Cookies & Local Storage) By Codegen Command :
//  1- For Save > npx playwright codegen --save-storage=/FileName/.json
//  2- For Reuse The Auth > npx playwright codegen --load-storage=/FileName/.json Website URL

 // If You Want To Avoid Using The Resue Saved Auth State On Specific Test File You Can Use This Method :

 //test.use({storageState : {cookies : [] , origins : []}}) 

/*test.beforeEach("Login Action", async ({ page }) => {
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", { waitUntil: "load" })
    //await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    //await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    //
    // await page.getByRole('button', { name: 'Login' }).click()
})
*/
test("Verifiy Open The Admin Page Successfully", async ({ page , context}) => {
    
   // If You Want To Avoid Using The Saved Auth State For Specific Test Method/Script You CAn Use : 
    //await context.clearCookies() ;

    // Here I ave The Sire Cookies And Print It At The Console 
    const cookies = await context.cookies();
    console.log(">>> Loaded cookies:", cookies);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()
    await page.getByRole('link', { name: 'Admin' }).click()
    await page.waitForTimeout(2500)
    await expect(page.url()).toContain('/admin');

})

test("Verfiy Add New Candicade To The Recruitment Plan ", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible()
    await page.getByRole('link', { name: 'Recruitment' }).click()
    await expect(page.getByRole('button', { name: ' Add' })).toBeVisible()
    await page.getByRole('button', { name: ' Add' }).click()
    await page.getByRole('textbox', { name: 'First Name' }).fill("Eslam2")
    await page.getByRole('textbox', { name: 'Middle Name' }).fill("Mohamed2")
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Abdallah")
    await page.getByRole('textbox', { name: 'Type here' }).first().fill("Eslam@test.com")
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible()
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toHaveText("Candidate Profile")
})