import { test, expect } from "@playwright/test"

test("Visual Testing Verification ", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    // If You Want To Make Visual Assertion Depend On The Refrence/Golden Screenshot That You Hace And The Actual Screenshot

    expect(page).toHaveScreenshot('test-results/VisualTestingPractise-Visual-Testing-Verification--chromium/test-failed-1.png')

    // If You Want To Capture Full Page Screenshot 
    expect(page).toHaveScreenshot("FullPageCapture.png", { fullPage: true })

    //If You Want The Playwright Assertion To Allow Specific Pixels Difference Between The Actual & Expected Screen Shots
    expect(page).toHaveScreenshot("MaxDiffFixelsPractise.png", { maxDiffPixels: 800 })

    //If You Want The Playwright Assertion To Allow Specific Pixels Ratio Difference Between The Actual & Expected Screen Shots
    expect(page).toHaveScreenshot("MaxDiffFixelsPractise.png", { maxDiffPixelRatio: 0.60 })

    //If You Want The Playwright Assertion To Mask/Ignore Any Elemnt From The Resource ScreenShot Because It's Dynamically Change
    expect(page).toHaveScreenshot("SingleMaskPractise.png", { mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")] }) // Single Mask
    expect(page).toHaveScreenshot("SingleMaskPractise.png", { mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]"), page.locator("#table2")] }) // Multi Mask

    //if You Want To Make The Visual Testing/Comparartion On Specific Element You Can Pass The Elemnt Allocator 
    expect(page.locator("#table1")).toHaveScreenshot("PractiseONSpecificElement.png")

    // If Your Ui Have been Updated And Your Golden/Refrence Screen Have Been Different About The Updated Ui You Can Use This Command To Updated The Current Golden Scrrenshot With The Actual Updated Ui 
    // npx playwright test --update-snapshots

    test("Visual Testinh Ifram Hidding Verification", async ({ page }) => {
        //If Your Website Have To Many Dynamic Iframs That Keep Changing All Time And Can Not Depend On It AS Refrence Screenshot You Can Change The StlePath By Make The Iframes Visibilty Is Hidden

        page.goto("http://demoqa.com/forms")
        expect(page).toHaveScreenshot("HiddenIframsPractise.png", { stylePath: 'Screenshots.css' })
    })

    test("Non Image Scrrenshot Practise",async({page})=>
        {
            await page.goto("https://playwright.dev/")
            expect(await page.getByRole('heading', { name: 'Playwright enables reliable' }).textContent()).toMatchSnapshot("HeadingTextSnapshot.txt")
        })
})