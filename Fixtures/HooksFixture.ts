import { test as baseTest, expect } from "@playwright/test"

type myHooksFixtures =
    {
        loginlogoutFixture: any
    }

export const test = baseTest.extend<myHooksFixtures>(
    {
        loginlogoutFixture: async ({ page }, use) => {
            const loginlogoutFixture = undefined
            //adding The Before Part (BeforeEach Hook)

            // Login 

            await page.goto("https://www.saucedemo.com/");
            await page.locator("input#user-name").fill("standard_user");
            await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
            await page.locator("input[name='login-button']").click();
            await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();

            // Ading The Execution Test Part 
            await use(loginlogoutFixture)

            // adding The After Part (AfterEach Hook)

            // LogOut

            await page.locator("button[id='react-burger-menu-btn']").click();
            await expect(page.locator("a[data-test = 'logout-sidebar-link']")).toBeVisible();
            await page.locator("a[data-test = 'logout-sidebar-link']").click();
            await expect(page.locator("input[name='login-button']")).toBeVisible();
        }
    })

export {expect} from "@playwright/test"