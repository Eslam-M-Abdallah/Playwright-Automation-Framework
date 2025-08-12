import {test , expect} from "@playwright/test" 

test.skip(({browserName})=> {return browserName === "chromium"})  // If You Want to skip Running The Test Case On Specific Browser At All The Test File 

//test.slow(({browserName})=> browserName=== "chromium") // You Can Slow the Time Out To Be Incresed TO Triple Time For The Whole Test File In Specific Browser 

//test.fail(({browserName})=> browserName === "chromium") // If i Want To Mark All The Test Fail That Should Be Fail On Specific Browser

// 1- (test.describe) Annotation : it's Used For Grouping Some Test Cases Under One Description 

test.describe("Positive Scenarios" , ()=> // Consist Of The Group Description Title & The Test Case that Will Be Grouped Under This Description 

    {
        test.skip(({browserName})=> {return browserName === "webkit"}) // If You Want to skip Running The Test Case On Specific Browser Inside Description Or Group 
        test("Practise Test 1" , async ({page})=>
    {
        await console.log("Starting The Practise Test 1")
        await console.log("Ending The Practise Test 1")
    })

test("Practise Test 2" , async ({page})=>
    {
        await console.log("Starting The Practise Test 2")
        await console.log("Ending The Practise Test 2")
    })

test("Practise Test 3" , async ({page})=>
    {
        await console.log("Starting The Practise Test 3")
        await console.log("Ending The Practise Test 3")
    })

    })

// 2- (test.only) : It's Will Run Only The Test Cases That Have This only Annotation 

// 3- (test.skip) : It's Will Run The Whole Test Case Except The Test Cases That Anootationed With Test.skip

test.skip("Practise Test 4" , async ({page})=>
    {
        await console.log("Starting The Practise Test 4")
        await console.log("Ending The Practise Test 4")
    })

test("Practise Test 5" , async ({page, browserName})=>
    {
        // Another Way To Write The Test.skip Annotation Inside The Test Case Body 

        test.skip(browserName === "webkit"); // If You Want to skip Running The Test Case On Specific Browser
        await console.log("Starting The Practise Test 5")
        await console.log("Ending The Practise Test 5")
    })

// 3- (test.fixme) : It's Like The Skip Annotation Will Skip Running This Test Case But The Different That test.fixme Remain You To Fix This Test Case In The Future 

test.fixme("Practise Test 6" , async ({page})=>
    {
        await console.log("Starting The Practise Test 6")
        await console.log("Ending The Practise Test 6")
    })
    
test("Practise Test 7" , async ({page})=>
    {
        test.fixme();
        await console.log("Starting The Practise Test 7")
        await console.log("Ending The Practise Test 7")
    })

// 6- (test.setTimeOut()) : This Annotation Is Used For Control The TimeoUt Of Each Test As You Like You Can Also Use This Annotation With Before/After Each/all And the hooks File 


test("Practise Test 8" , async ({page})=>
    {
        test.setTimeout(60 * 60 * 1000); // 1 hour (simulate "no timeout")
        await console.log("Starting The Practise Test 8")
        await console.log("Ending The Practise Test 8")
    })

// 5- (test.fail) : It's Used For Mark The Test Case That Should Be Fail It's Usually be Useful If i Know That Test Case Have Some Broken Implementation For Know & i Want Mark It AS Fail To Show It At The Html Report 


test("Practise Test 9" , async ({page , browserName})=>
    {
       // test.fail(browserName === "chromium") // Mark That The Test Will Be Fail On Specific Browser 
        test.fail() ;
        await console.log("Starting The Practise Test 8")
        await console.log("Ending The Practise Test 8")
    })

// 5- (test.slow) : It's Used For Increase The Default Timeout Of Tests That You Set For Timeout option At The Configuration File To The Triple Time That Mean If the timeout : 10000 ms With test.slow Annotation Will Be = 30000 ms

test("Open The SauceLabs Web Pag" , async ({page , browserName})=>
    {
        test.slow();
        //test.slow(browserName === "chromium") ; // You Can Slow the Test Time Out On Specific Browser 
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveURL("https://www.saucedemo.com/") ;
        await page.locator("input#user-name-error").fill("standard_user");
    })