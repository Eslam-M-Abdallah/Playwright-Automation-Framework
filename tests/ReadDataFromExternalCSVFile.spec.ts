import { test, expect } from "@playwright/test"

import fs from "fs" // Import The File System Package To Interact With The Sysytem Files 

import { parse } from "csv-parse/sync" // Import The Parse Method To Parse The CSV Data 

test.use({storageState : {cookies : [] , origins : []}}) 

// You Will use The Parse Method To Convert The CSV File Data To Binary & Use The Readfile To Pass The CSV File Path And Add Our Options 
// You Will Save The CSV File Data/Rows As Array With Objects Elements

// TypeScript doesn’t know the structure of the data being returned From The CSV File, so it infers:
// TypeScript complains because record is treated as unknown
// Define a type for the record

type RecordType = {
    fullname: string;
    Email: string;
};

const records = parse(fs.readFileSync("TestData/testData.csv"),
    {
        // File Options 

        columns: true, // To Consider That The First Row At THe CSv File Is The Column Headers 
        skipEmptyLines: true, // To Skip The Empty Rows/Lines At The CSV File/Sheet 
        // delimiter : "/" // If You Want To Change The Default delimiter " , " That Seperate Between Row Data To Any Another One 
    }) as RecordType[];
// Using The ForEach To Iterate Inside The Records Array And Set All The Objects Inside It 

/*records.forEach((record ) => {
    test(`Read Data From External CSV File Practise ${record.Email}`, async ({ page }) => {  
        console.log(records)
        await page.goto("https://qavalidation.com/demo-form/?contact-form-hash=875a4285a37d67e2416c29f39cb2425c0d8d255c", { waitUntil: "load" })
        await page.locator("#g4072-fullname").fill(record.fullname) 
        await page.getByTestId('contact-form').getByRole('textbox', { name: 'Email' }).fill(record.Email) 
        await page.locator("text= Submit!").click()
        await expect(page.getByRole('link', { name: 'Go back' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Your message has been sent' })).toBeVisible()
        await page.getByRole('link', { name: 'Go back' }).click();

    })

})
*/
// If You Want To Iterate Using The For Of Loop

for (const record of records) {
    test(`Read Data From CSV for Email: ${record.fullname}`, async ({ page }) => {
        console.log(records)
        await page.goto("https://qavalidation.com/demo-form/?contact-form-hash=875a4285a37d67e2416c29f39cb2425c0d8d255c", { waitUntil: "load" })
        await page.locator("#g4072-fullname").fill(record.fullname)
        await page.getByTestId('contact-form').getByRole('textbox', { name: 'Email' }).fill(record.Email)
        await page.locator("text= Submit!").click()
        await expect(page.getByRole('link', { name: 'Go back' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Your message has been sent' })).toBeVisible()
        await page.getByRole('link', { name: 'Go back' }).click();
    });
}

