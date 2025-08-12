import {test , expect} from "@playwright/test"

// The Frame/Ifram Is an Html Web Element That Host Another Web Elements Inside It And To Access These Web elemnts You Must To Handle The Iframe First


// Handle the Iframe With Name 

test("Handle The iframe With Name" , async({page})=>
    {
        await page.goto("https://demo.automationtesting.in/Frames.html")
        const W3Frame = page.frame("SingleFrame")
        await W3Frame?.getByRole('textbox').fill("Eslam Mohamed Test")
    })

// Handle The frame With URL

test("Handle The Frame With URL",async({page})=>
    {
        await page.goto("https://vinothqaacademy.com/iframe/")
        const myFrame = page.frame({url : "https://vinothqaacademy.com/webtable/"})
        await myFrame?.locator("input[placeholder='Name']").fill("Eslam Test")
    })

// Handle The Frame With FrameLocator Method 

test("Handle The Frame With FrameLocator Mrthod",async({page})=>
    {
        await page.goto("https://demo.automationtesting.in/Frames.html")
        const myFrame2 = page.frameLocator("[id='singleframe']")
        await myFrame2?.getByRole('textbox').fill("Eslam Mohamed Test")
    })

