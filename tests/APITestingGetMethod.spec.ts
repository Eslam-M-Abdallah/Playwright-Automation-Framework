import { test, expect, request } from "@playwright/test"

let reqcontext
test.beforeEach("Run Before All Tests", async () => {
    // The Third Way By Add The request.context() With The Base URl Inside It At The Before All Test 
    reqcontext = await request.newContext(
        {
            baseURL: "https://restful-booker.herokuapp.com",
            extraHTTPHeaders: //Adding The Headters At The beforeEach Test To Be Apllicable For All Tests
            {
                Accept: "application/json"
            }
        })
})

test("API Testing GET Method Practise 1", async ({ request }) => // We Use The Request Fixture For The API Testing
{
    //First Way By Pass The Base URL Directly To The Request Fixture Get Method
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking",
        {
            headers:  // Add The Headers As Argument At The request.get() Method 
            {
                Accept: "application/json"
            }
        })
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 2", async () => {
    //Second Way By Pass Using The request.context() Method And Pass The Base URL Inside This Context
    const reqContext = await request.newContext(
        {
            baseURL: "https://restful-booker.herokuapp.com",
            extraHTTPHeaders: // Pass The Headers AT the newContext() Object 
            {
                Accept: "application/json"
            }
        })
    const resp1 = await reqContext.get("/booking")
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 3", async () => {
    const resp1 = await reqcontext.get("/booking")
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 4", async ({ request }) => {
    // The Foruth Way Bu Adding The Base URL At the Config File 
    // Adding The Headers As Global Key/Label At The Config File 
    const resp1 = await request.get("/booking")
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 5", async ({ request }) => {
    // Using The Path/URL Parameter By Appending It After The Resource Root
    const resp1 = await request.get("/booking/3682")
    console.log(await resp1)
})

test("API Testing GET Method Practise 6", async ({ request }) => {
    // First Way To Use The Query Parameter By Appending It Directly To The request.get() URL
    const resp1 = await request.get("/booking?firstname=John&lastname=Smith")
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 7", async ({ request }) => {
    // Second Way To Use The Query Parameter By Add It As Argument At The request.get() Method Object
    const resp1 = await request.get("/booking",
        {
            params:
            {
                firstname: "John",
                lastname: "Smith"
            }
        }
    )
    console.log(await resp1.json())
})

test("API Testing GET Method Practise 8", async ({ request }) => {
    const resp1 = await request.get("/booking/1155")
    console.log(await resp1.json())
    expect(resp1.status()).toBe(200)   // Expect The Response Status Code To Be 200 #Success
    expect(resp1.ok()).toBeTruthy()    // Expect The Response Status  Is Ok
    expect(await resp1.json()).toMatchObject({ // Expect The Response To Be As I Provided 
        firstname: 'John',
        lastname: 'Smith',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })

    const jsonresp = await resp1.json();
    expect(jsonresp.firstname).toEqual("John") // Expect Specific Key/Part AT The Response To Be As I Provided 
})

test("API With Ui Verification",async({request,page})=>
    {
       const resp2 =  await request.get("https://api.demoblaze.com/entries") 
       const jsontresp2 = await resp2.json()
       console.log(jsontresp2.Items[0].title) 
       await page.goto("https://demoblaze.com/")
       await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsontresp2.Items[0].title)
    })