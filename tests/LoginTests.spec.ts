import {test , expect} from "@playwright/test"

// Open The SauceLabs Web Page 

test("Open The SauceLabs Web Pag" , async ({page})=>
    {
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveURL("https://www.saucedemo.com/") ;
    })

// Login Successfully To The Home Page 

test("Login Successfully To The SauceLabs Page " , async ({page})=>
    {
       await page.goto("https://www.saucedemo.com/");
       await page.locator("input#user-name").fill("standard_user");
       await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
       await page.locator("input[name='login-button']").click();
       await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();
    })

// Login Unsuccessfully To The Home Page 

test("Login Unsuccessfully To The SauceLabs Page " , async ({page})=>
    {
       await page.goto("https://www.saucedemo.com/");
       await page.locator("input#user-name").fill("standard_user_Wrong");
       await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
       await page.locator("input[name='login-button']").click();
       await expect.soft(page.locator("div[class='error-message-container error']")).toBeVisible();
    })