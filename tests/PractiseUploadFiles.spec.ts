import {test,expect} from "@playwright/test" 
//You Can Upload Single Or Multiple Files From your Device By Using The setInputFiles("File Path") Method 
// In Case Of Multiple Files Will Pass Array Of The File Paths : setInputFiles(["File Path1" , "File Path2"])

test("practise Upload  File 1",async({page})=>
    {
        await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
        //await page.locator("#filesToUpload").setInputFiles("To-Upload\Test1.txt") //upload One File
        //await expect(page.getByText('Test1.text')).toHaveText("Test1.text")
        await page.locator("#filesToUpload").setInputFiles(["To-Upload/Test1.txt" , "To-Upload/Test2.xlsx" , "To-Upload/Test3.docx"]) //Upload Multiple Files
        test.setTimeout(4000) 
        await page.locator("#filesToUpload").setInputFiles([]) // To Remove The Uploaded Files 
    })

test("practise Upload  File 2",async({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/upload")
        // Add The Event Listner Here Before The Element That Trigger This Event 
        const fileChooserPromise = page.waitForEvent("filechooser")
        await page.locator("#drag-drop-upload").first().click()
        const fileChooserResolved = await fileChooserPromise
        //await fileChooserResolved.setFiles("To-Upload/Test2.xlsx") //Upload Single File 
        await fileChooserResolved.setFiles(["To-Upload/Test1.txt" , "To-Upload/Test2.xlsx" , "To-Upload/Test3.docx"]) //Upload Multiple Files 

    })