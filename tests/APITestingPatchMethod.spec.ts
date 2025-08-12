import { test, expect } from "@playwright/test"

test("API Testing Practise Patch Call", async ({ request }) => {
    const resp = await request.patch("https://restful-booker.herokuapp.com/booking/1",
        {
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": "token=abc123"
            },

            data: {
                "firstname": "James",
                "lastname": "Brown"
            }
        })
    const respjson = await resp.json()
    console.log(respjson)
    expect(resp.status()).toBe(200)
    //expect(resp1.statusText).toBe("OK")
    expect(resp.ok()).toBeTruthy()
    expect(respjson).toMatchObject({
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
})
    expect(respjson.firstname).toEqual("James")
})