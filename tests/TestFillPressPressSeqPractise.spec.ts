import {test, expect} from "@playwright/test"

test("Fill Press & Press Sequentially Practise" , async({page})=>
    {
        // Fill() Method : 

       // await page.goto("https://ultimateqa.com/filling-out-forms/")
       // await page.locator("input#et_pb_contact_name_0").fill("Test Eslam")
       // await page.locator("textarea#et_pb_contact_message_0").fill("This Is Just For Practise Automation Testing..")

        //You Can Fill Text at Input Area That Already Have AN Text & The New Text Will Be Editable For The Old One 

       // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
       // await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').fill("This Is The Editable Content From My Side ")

        //pressSequentially() Method : It's Act As the User Input At The Keyboard & Enter The Text Value Char By Char

        await page.goto("https://www.google.com/")
        await page.locator("textarea[name='q']").pressSequentially("Playwright" ) //delay Option Is Delay The Execution Of The pressseq Method Action 

        //press() Method : It's Mimic The Press Actions That You Can Do From The Keyboard By Add The "Keyboad" Button Action That you Want 
        await page.locator("textarea[name='q']").press("Backspace")
        await page.locator("textarea[name='q']").press("ArrowDown+ArrowDown+ArrowDown")
        await page.locator("textarea[name='q']").press("Enter")
        //await page.locator("dsgr").press("Tab")
    })

