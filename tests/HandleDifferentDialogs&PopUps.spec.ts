import {test , expect} from "@playwright/test"

// By Default The Playwright Is Handle The Alerts & Pop ups by Dismiss Them Always 

// Handel The Dialog Alerts 

test("Handle The Dialog Alert", async({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

        // The Event Handler Consist Of 2 Parts (Event Type , The Body/Execution "Listener" Of the event)
        page.on("dialog" , dialog =>
            {
                expect(dialog.type()).toEqual("alert")
                expect(dialog.message()).toEqual("I am a JS Alert")
                dialog.accept()
            })

        //You Should To Set The Event Handler Before The Action That Will Trigger The Alert In This Case Click On The Below Button 
        await page.locator("text=Click for JS Alert").click();

        await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
    })

// Handle The Confirmation Dialog

test("Handle The Confirm Dialog" , async({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

        //Event Handler 
        page.on("dialog" , dialog=>
            {
                expect(dialog.type()).toEqual("confirm")
                expect(dialog.message()).toEqual("I am a JS Confirm")
                dialog.dismiss();
            })

        await page.locator("text=Click for JS Confirm").click();
        await expect(page.locator("#result")).toHaveText("You clicked: Cancel")
    })

// Handle The Prompt Dialog

test("Handle The Prompt Dialog" , async({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

        //Event Handler
        page.on("dialog" , dialog=>
            {
                expect(dialog.type()).toEqual("prompt")
                expect(dialog.message()).toEqual("I am a JS prompt")
                expect(dialog.defaultValue()).toEqual("")
                dialog.accept("Eslam Mohamed") // You Can Pass The String You Want While Accepting/Dismissing the Prompt Dialog
            })

        await page.locator("text=Click for JS Prompt").click()
        await expect(page.locator("#result")).toHaveText("You entered: Eslam Mohamed")


    })

