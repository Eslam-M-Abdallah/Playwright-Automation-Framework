import {test , expect, Page } from "@playwright/test"

// Add The BeforeEach Test Script To Be Precondation For the Rest Of test Cases 

 /* test.beforeEach(async ({page})=>
    {
       await page.goto("https://www.saucedemo.com/");
       await page.locator("input#user-name").fill("standard_user");
       await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
       await page.locator("input[name='login-button']").click();
       await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();
    })
*/  

// Using The Beforeall Hook Not Work With The Page Fixture So You Should To Use The Page Varible Of Type Page Then Use browser.newPage() To Creae New Page 
let  page : Page ;

test.beforeAll(async ({browser})=>
    {
       page = await browser.newPage() ;
       await page.goto("https://www.saucedemo.com/");
       await page.locator("input#user-name").fill("standard_user");
       await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
       await page.locator("input[name='login-button']").click();
       await expect(page.locator("//a[@class='shopping_cart_link']")).toBeVisible();
    })
test("Verify That The Items Added To Cart Successfully" , async()=>
    {
        await page.locator("text= Sauce Labs Backpack").click();
        await page.locator("button[id='add-to-cart']").click();
        await page.locator("a[class='shopping_cart_link']").click();
        await expect(page.locator("div[class='inventory_item_name']")).toHaveText("Sauce Labs Backpack") ;
        await expect(page.locator("button[id='remove-sauce-labs-backpack']")).toBeVisible();

    })

test("Verify The Empty Cart" , async()=>
    {
        await page.locator("button[id='remove-sauce-labs-backpack']").click();
        await page.locator("a[class='shopping_cart_link']").click();
        await expect(page.locator("button[id='remove-sauce-labs-backpack']")).toBeHidden();

    })

test.afterAll(async()=>
    {
       await page.locator("button[id='react-burger-menu-btn']").click();
       await expect(page.locator("a[data-test = 'logout-sidebar-link']")).toBeVisible() ;
       await page.locator("a[data-test = 'logout-sidebar-link']").click();
       await expect(page.locator("input[name='login-button']")).toBeVisible();
    })

/*test.afterEach(async({page})=>
    {
       await page.locator("button[id='react-burger-menu-btn']").click();
       await expect(page.locator("a[data-test = 'logout-sidebar-link']")).toBeVisible() ;
       await page.locator("a[data-test = 'logout-sidebar-link']").click();
       await expect(page.locator("input[name='login-button']")).toBeVisible();
    })
*/