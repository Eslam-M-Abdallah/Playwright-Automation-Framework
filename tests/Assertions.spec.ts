import {test , expect} from "@playwright/test"

// 1- The Auto-Retrying Assertions : That Type Of Assertions It's Repeat The Assertion For Specific Time To Check If This Assertions Is Realy Exist Or Not 

test("Practise On Assertions" , async ({page})=>
    {
        await page.goto("https://www.saucedemo.com/");

        // Assertions Of "ToHaveCount" To Check If The Specific Element Is Appear For Number Of Specific Count 

        await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);

        // Assertions Of "ToBeEnabled" To Check If The Specific Element Is Enabled At The Web Page Or Not Ex (Button - Checkbox)

        await expect(page.locator('[data-test="login-button"]')).toBeEnabled();

        // Assertions Of "ToBeDisabled" To Check If The Specific Element Is Disabled At The Web Page Or Not Ex (Button - Checkbox)

        //await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled();

       // Assertions Of "ToBeVisable" To Check If The Specific Element Is Visible At The Web Page Or Not 

       await expect(page.locator('[data-test="login-button"]')).toBeVisible();

       // Assertions Of "ToBeHidden" To Check If The Specific Element Is Hidden At The Web Page Or Not The Opposite Of ToBeVisable Check

      //await expect.soft(page.locator('[data-test="login-button"]')).toBeHidden();

       // Assertions Of "ToHaveText" To Check If The Specific Element Is Have Specific Text 

       await expect(page.locator('[data-test="login-button"]')).toHaveText("Login")

       // Assertions Of "ToHaveAttribuite" To Check If The Specific Element Is Have Specific Attribuite Value Ex (AttribuiteName , Value)
       
       await expect(page.locator('[data-test="login-button"]')).toHaveAttribute("name" , "login-button");

       // Assertions Of "ToHaveId" To Check If The Specific Element Is Have Specific Value Of The ID 

       await expect(page.locator('[data-test="login-button"]')).toHaveId("login-button")

       // Assertions Of "toHaveClass" To Check If The Specific Element Is Have Specific Value Of The Class

       await expect(page.locator('[data-test="login-button"]')).toHaveClass("submit-button btn_action");

       // Assertions Of "toHaveUrl" To Check If The Page Have Specific URL Or Not 

       await expect(page).toHaveURL("https://www.saucedemo.com/");

       // Assertions Of "toHaveTitle" To Check If The Page Have Specific Title Or Not 

       await expect(page).toHaveTitle("Swag Labs");

      // 2- The Non-Retrying Assertions : That Type Of Assertions It's Not Repeat The Assertions Check Because It's Work on The Non Async Modules So It's Not Waiting For Any Time To Repeat The assertion Check

      expect("Mohamed").toBe("Mohamed") ; // Check The Values To Be The Same

      // Negative Matches : It's Expect The opposite Of The Assertion Result By Adding The .not Before The Assertion Check 

      await expect(page).not.toHaveTitle("Swag Labss")

      // Custom Error Message : It's Used For Check/Expext For Specific Custom Error Message For The Assertion Faild Result 

    // await expect.soft(page , "Timed out 5000ms waiting for expect(locator).not.toHaveTitle(expected)").not.toHaveTitle("Swag Labs")

     //Soft Assertion : Is a Type Of Assertions That Give Me The Opportunity To Continue The Flow Even The Assertion Is Not Match "Will Not Break The Running Of The Rest Of Script" & Will Give Me The Errors Messsage At The Console 

     // Can Use The Soft Assertion By Adding .soft After The Expexct Keyword 

    console.log("Check The Soft Assertion ")

    })