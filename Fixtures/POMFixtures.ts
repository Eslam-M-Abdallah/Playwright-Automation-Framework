import {test as baseTest} from "@playwright/test"
import { loginPage } from "../Pages/loginPage"
import { homePage } from "../Pages/homePage"
import { cartPage } from "../Pages/cartPage"

type myPomFixtures = 
{
    loginPageFixture : loginPage ,
    homePageFixture : homePage ,
    cartPageFixture : cartPage
}

export const test =  baseTest.extend<myPomFixtures>(
    {
        loginPageFixture : async({page} , use) =>
            {
                const loginPageObj = new loginPage(page)
                await use(loginPageObj)
            }
            ,
        homePageFixture : async({page} , use)=>
            {
                const homePageObj = new homePage(page)
                await use(homePageObj)
            }
            ,
        cartPageFixture : async({page} ,use)=>
            {
                const cartPageObj = new cartPage(page)
                await use(cartPageObj)
            }
    })