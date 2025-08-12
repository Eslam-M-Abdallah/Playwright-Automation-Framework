import { test } from "@playwright/test";

test("Keyboard Actions Practise",async({page})=>
    {
        await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        // You Can Perform Actions From The Keyboard By Using The press(Key Name) Method For Specific Locator 
        //Or page.keyboard.press(Key Name) To Perform Action On The Whole Page 
        const commentTextArea =  page.getByText('Comments...')
        await commentTextArea.press("Control+a") 
        await commentTextArea.press("Backspace")
        await commentTextArea.press("A+A+A")
        await commentTextArea.press("Control+a+x")
        const UserNameInputField =  page.locator("input[name='username']")
        await UserNameInputField.press("Control+v")
        await UserNameInputField.press("ArrowLeft+ArrowLeft+ArrowLeft")
        await UserNameInputField.press("Z")
        await page.keyboard.press("PageDown")
        test.setTimeout(3000)
        await page.keyboard.press("PageUp") 
    })
