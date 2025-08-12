import {test , expect} from "@playwright/test"

import {loginPage} from "../Pages/loginPage" // Import The LoginPage Class From The Pages Folder/Package 

import { homePage } from "../Pages/homePage" // Import The homePage Class From The Pages Folder/Package 

import { cartPage } from "../Pages/cartPage" // Import The cartPage Class From The Pages Folder/Package 

test("verification The Cart",async({page})=>
    {
        // Take instance/Object From The loginPage Class 

        const loginPageObj = new loginPage(page)

        // Call The Action Methods From The loginPage Class
        
        await loginPageObj.openApplication()
        await loginPageObj.login("standard_user" , "secret_sauce");
        const homePageObj = new homePage(page)
        await expect(homePageObj.homePageHeader).toHaveText("Swag Labs")
        await homePageObj.backpackAddToCart()
        await expect(homePageObj.cartIcon).toHaveText("1")
        await expect(homePageObj.backpackRemoveButton).toBeVisible()
        await homePageObj.gotoCart();
        const cartPageObj = new cartPage(page)
        await expect(cartPageObj.backpackItemLink).toHaveText("Sauce Labs Backpack")
    })