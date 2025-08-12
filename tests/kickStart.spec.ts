// import  Test Module From playwright/Test  Package/Framework 

import {chromium, test} from "@playwright/test" 

// Create New Test Script And Add It's Name/title & Arrow Function That Have The Test Scipt Body/Details 


test("kick Start To The Playwright Framework" , async ({page})=>  // Use The Async/Await Methods To Handle The Elements Waits And Page Fixture To Open The Specific URL in The Browser 
    {
        //If You Not Use The Page Fixture Directlt Form Playwright You Will Must To Set Up The Page Method By Your Own 
         //const browser = await chromium.launch();
         //const context = await browser.newContext();
         //const page = await context.newPage()

        // await keyword Wait Until The promise Be Return For This Line Before Move To The Next Line
        await page.goto("https://www.google.com");
        await page.getByRole('button', { name: 'تطبيقات Google' }).click();
        console.log("My First Test Script ");
    })

test("My 2nd Test Scipt" , ()=>
    {
        console.log("My Second Test Script")
    })

