import {test , expect} from "@playwright/test"

// You Can Handle The New Tab / Window / Page With Same Way 

test("handle New Tab Or Page",async({context})=> // here We Use The Context Fixture
    {
        //test.slow();
        const page = await context.newPage();
        await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/")
        await expect(page).toHaveTitle("Frames And Windows - GlobalSQA")

        // You Must To Set The WaitforEvent Method To Wait Appearance Of The New Page Before The Action That Will Trigger The New Page 

        const pagePromise = context.waitForEvent("page"); 

        await page.getByRole('link', { name: 'Click Here' }).click();

        const newPage = await pagePromise
        await newPage.waitForLoadState();
        await newPage.getByPlaceholder("Search...").fill("Eslam Mohamed")
        await newPage.getByRole('button').click();
    })