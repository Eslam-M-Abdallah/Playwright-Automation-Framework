import { test, expect } from "@playwright/test"
import testdata1Array from "../TestData/testData1.json"
import logindata from "../TestData/logindata.json"
//test.use({storageState : {cookies : [] , origins : []}})

test.beforeEach("Login Action", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "load" })
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})

test("Verifiy Open The Admin Page Successfully", async ({ page, context }) => {
    //await context.clearCookies() ;
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()
    await page.getByRole('link', { name: 'Admin' }).click()
    await page.waitForTimeout(2500)
    await expect(page.url()).toContain('/admin');

})

//Using The ForEach To Get All The Data Sets Inside The testData1 File Array 

testdata1Array.forEach((data) => { 
    test(`Verfiy Add New Candicade To The Recruitment Plan ${data.firstname}`, async ({ page, context }) => {
        //await context.clearCookies() ;
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible()
        await page.getByRole('link', { name: 'Recruitment' }).click()
        await expect(page.getByRole('button', { name: ' Add' })).toBeVisible()
        await page.getByRole('button', { name: ' Add' }).click()
        await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname)
        await page.getByRole('textbox', { name: 'Middle Name' }).fill(data.middlename)
        await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname)
        await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email)
        await expect(page.getByRole('button', { name: 'Save' })).toBeVisible()
        await page.getByRole('button', { name: 'Save' }).click()
        await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toHaveText("Candidate Profile")
    })
})

// You Can Also Use The For Of loop To Get All The Data Sets Inside The testData1 File Array 
/*test.describe("Use Dynamic Data Set Example", async () => {
    for (const data2 of testdata1Array) {
        test("Verfiy Add New Candicade To The Recruitment Plan1" + data2.lastname, async ({ page, context }) => { 
            //await context.clearCookies() ;
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
            await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible()
            await page.getByRole('link', { name: 'Recruitment' }).click()
            await expect(page.getByRole('button', { name: ' Add' })).toBeVisible()
            await page.getByRole('button', { name: ' Add' }).click()
            await page.getByRole('textbox', { name: 'First Name' }).fill(data2.firstname)
            await page.getByRole('textbox', { name: 'Middle Name' }).fill(data2.middlename)
            await page.getByRole('textbox', { name: 'Last Name' }).fill(data2.lastname)
            await page.getByRole('textbox', { name: 'Type here' }).first().fill(data2.email)
            await expect(page.getByRole('button', { name: 'Save' })).toBeVisible()
            await page.getByRole('button', { name: 'Save' }).click()
            await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toHaveText("Candidate Profile")
        })
    }
})
*/
