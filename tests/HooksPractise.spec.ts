import {test , expect} from "@playwright/test"

// 3- beforeAll Hook : It's Used For Adding Specific Execution Block Will Run Once One Time Before All The Test Cases 

test.beforeAll("Practise On beforeAll " , async ()=>
    {
        await console.log("Exexution Of BeforeAll Block")
    })

// 1- beforeEach Hook : It's Used For Adding Specific Execution Block Will Run Before Each Test Cases 
test.beforeEach("Practise On beforeEach" , async()=>
    {
        await console.log("Execution Of The beforeEach Block")
    })

test("Hooks Practise 1" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 1") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 1")
    })

test("Hooks Practise 2" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 2") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 2")
    })

test("Hooks Practise 3" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 3") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 3")
    })

    // Add Test Cases On The Describe 

test.describe("Group 1" , ()=>
    {

        test.beforeAll("Practise On beforeAll " , async ()=>
    {
        await console.log("Exexution Of BeforeAll Test Cases  Inside The Group 1 Decribe ")
    })

        test.beforeEach("Practise On beforeEach" , async()=>
    {
        await console.log("Execution Before Each Test Case At The Group 1 Description ")
    })

        test("Hooks Practise 4" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 4") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 4")
    })

test("Hooks Practise 5" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 5") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 5")
    })

test("Hooks Practise 6" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 6") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 6")
    })

     test.afterEach("Practise On afterEach" , async()=>
    {
        await console.log("Execution After Each Test Case At The Group 1 Description ")
    })

     test.afterAll("Practise On beforeAll " , async ()=>
    {
        await console.log("Exexution Of afterAll Test Cases  Inside The Group 1 Decribe ")
    })

    })

test("Hooks Practise 7" , async ({page})=>
    {
        await console.log("Starting Hooks Practise 7") ;
        await page.goto("https://www.saucedemo.com/");
        await console.log(await page.title()) ;
        await console.log("Ending Hooks Practise 7")
    })

// 2- afterEach Hook : It's Used For Adding Specific Execution Block Will Run After Each Test Cases 
test.afterEach("Practise On afterEach" , async()=>
    {
        await console.log("Execution Of The afterEach Block")
    })

// 4- afterAll Hook : It's Used For Adding Specific Execution Block Will Run Once One Time After All The Test Cases 

test.afterAll("Practise On afterAll " , async ()=>
    {
        await console.log("Exexution Of afterAll Block")
    })

//Before And After All Hooks It's Run Once Per Worker So If You Want To Run Them More Than One time You Should To Change The Workers : Option Value To Be One Worker Per Each Berfore And After All Hooks 

// If you Add more Than One Before / After Each For Ex (5) Methods All Of Them Will Be Run With Their Order In The Code Block

test.beforeEach(async()=>
    {
        //1 
    })

test.beforeEach(async()=>
    {
        //2
    })

test.beforeEach(async()=>
    {
        //3
    })