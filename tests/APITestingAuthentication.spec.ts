import { test, expect } from "@playwright/test"

test("API Authentication Using APi Key", async ({ request }) => {
    const resp1 = await request.put("https://restful-booker.herokuapp.com/booking/1",
        {
            headers:
            {
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
            ,
            data: {
                "firstname": "Eslam",
                "lastname": "Mohamed",
                "totalprice": 100,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Cofee"
            }
        })
    const resp1json = await resp1.json()
    console.log(resp1json)
    expect(resp1.status()).toBe(200)
    expect(resp1json).toMatchObject({
        "firstname": "Eslam",
        "lastname": "Mohamed",
        "totalprice": 100,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Cofee"
    })
})

//Using The Auth Token And Pass It AS Header  To Authenticate At The APi Calls
let Token

test.beforeAll("Using & Get The Auth Token In APi Calls", async ({ request }) => {
    const respToken = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            data: {
                "username": "admin",
                "password": "password123"
            }
        })
    const respTokenJson = await respToken.json()
    console.log(respTokenJson)
    Token = respTokenJson.token
    console.log(Token)
})

// Using The Generated Token To Authenticate In The Next API Calls 

test("Authenticate In The Put Call Using Basic Auth Token", async ({ request }) => {
    const resp2 = await request.put("/booking/1",
        {
            headers:
            {
                Cookie: "token=" + Token
            },
            data: {
                "firstname": "Eslam",
                "lastname": "Mohamed",
                "totalprice": 1000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Cofee"
            }
        })
    const resp2json = await resp2.json()
    console.log(resp2json)
    expect(resp2.status()).toBe(200)
    expect(resp2json).toMatchObject({
        "firstname": "Eslam",
        "lastname": "Mohamed",
        "totalprice": 1000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Cofee"
    })
})

test("Authenticate In The Delete Call Using Basic Auth Token",async({request})=>
    {
        const resp3 = await request.delete("https://restful-booker.herokuapp.com/booking/4",
            {
                headers : 
                {
                    Cookie : "token=" + Token
                }
            })
            expect(resp3.status()).toBe(201)
            expect(await resp3.text()).toEqual("Created")
    })