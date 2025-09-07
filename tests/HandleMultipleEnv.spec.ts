import {test , expect} from "@playwright/test" 

//First After Install The dotenv Package By Using This Command " npm i dotenv " You Create New Folder Env-Files That Will Include The Multiple Environments Files Like (.env.production , .env.Staging)

// You Can Set tHe Env Name That You Want To Run The Scripts On It By Using These Commands 
  // First >> set Test_Env = Env Name 
  // Second >> npx playwright test Test_File

// If You Want To Run The Same Command To Determine The Env Name Cross-env By Using Shortcut And Run It Any Consloe (cmd - powershell - bash Terminal)
//You Want At THe Package.json AFter Download The cross-env Package At THe scripts Key Object Add The Shortcut Key & The Value Then Use This Command To Run The Shortcut >> npm run Short cutName

test("Handel Multiple Environments Practise",async({page})=>
    {
         console.log(process.env.URL)
         console.log(process.env.USERNAME1)
         console.log(process.env.PASSWORD) 
         let URLVal = process.env.URL as string //Add The Type Annotation/Assertion For The URlVal Varible
         //Second Way To Add String Type Annotation 
         //const URLVal1 = process.env.URL as string  
         await page.goto(<string>URLVal) 
         await page.locator('[data-test="username"]').fill(<string>process.env.USERNAME1)
         await page.locator('[data-test="password"]').fill(process.env.PASSWORD as string) 
         await page.waitForTimeout(2000) 
         await page.locator('[data-test="login-button"]').click()
    })