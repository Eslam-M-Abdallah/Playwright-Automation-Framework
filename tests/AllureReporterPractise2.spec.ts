import {test , expect } from "@playwright/test"

test("Practise On Allure Reporter 4" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google")
    })

test("Practise On Allure Reporter 5" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google")
    })

test("Practise On Allure Reporter 6" , async({page})=>
    {
        await page.goto("https://www.google.com")
        await expect(page).toHaveTitle("Google")
    })

// You Can Generate Allure Report File By Using This Command npx playwright test Test_Folder --reporter=allure-playwright & Will Save The Result At Default allure-Playwright Folder

// You Can Save The Allure Report Result In Specific Folder By This Command AT The cmd Terminal 
   //set ALLURE_RESULTS_DIR=Folder Name 
   // Then Run The Command npx playwright test Test_Folder --reporter=allure-playwright

// You Can Save The Allure Report Result In Specific Folder By This Command AT The Powershell Terminal 
   //$env:ALLURE_RESULTS_DIR="FolderName" ; npx playwright test Test_Folder --reporter=allure-playwright

// You Can Save The Allure Report Result In Specific Folder By This Command AT The Bash Terminal 
   // ALLURE_RESULTS_DIR=Folder Name npx playwright test Test_Folder --reporter=allure-playwright

// You Can Genrate The ALlure Report By Using The Command : allure generate Folder_Results_Name 

// You Can Open  The ALlure Report By Using The Command : allure open Folder_report_Name

// You Can Merge The Both Command (Generate Report Folder & Open It ) By Using This Command : allure serve Folder_Results_Name

// If You Want To Genrate No Report File And Overwrite On Exist Report-File Use The Commadn : allure generate Result-File-Name --clean

// If You Want To Genrate Multiple Different Reporter You Can Use This Command : npx playwright test test-Folder reporter=allure-playwright,html,dot

// If You Want Ti Change The Default allure-report File to Another One use This Command : allure generate allure-results -o New-Report-Folder-Name