import { expect } from "@playwright/test"
import {test} from "../Fixtures/TestDataFixture" 

test.beforeEach("Login Action", async ({ page , loginData}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", { waitUntil: "load" })
    await page.getByRole('textbox', { name: 'Username' }).fill(loginData.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
})

test("Verfiy Add New Candicade To The Recruitment Plan ", async ({ page , testData }) => {
    await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible()
    await page.getByRole('link', { name: 'Recruitment' }).click()
    await expect(page.getByRole('button', { name: ' Add' })).toBeVisible()
    await page.getByRole('button', { name: ' Add' }).click()
    await page.getByRole('textbox', { name: 'First Name' }).fill(testData.firstname)
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(testData.middlename)
    await page.getByRole('textbox', { name: 'Last Name' }).fill(testData.lastname)
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(testData.email)
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible()
    await page.getByRole('button', { name: 'Save' }).click()
    await expect(page.getByRole('heading', { name: 'Candidate Profile' })).toHaveText("Candidate Profile")
})