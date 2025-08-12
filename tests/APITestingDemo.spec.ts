import { test, expect } from "@playwright/test"

import APIValues from "../TestData/APIDemoData.json"
// Get The Auth Token To Use It As Authenticator In The Next API Calls 

let Token
test.beforeEach("Get The Basic Auth Token", async ({ request }) => {
    const respToken = await request.post("https://api.staging.payformance.io/v2/identity/authenticate",
        {
            data: APIValues.TokenPostCall
        })
    const respTokenjson = await respToken.json()
    console.log(respTokenjson)
    Token = respTokenjson.body.accessToken.token
    console.log(Token)
})

test(" Testing Create IP API ", async ({ request }) => {
    const resp1 = await request.post("https://api.staging.payformance.io/v2/ip-address",
        {
            headers:
            {
                "Content-Type": "application/json",
                Authorization: "Bearer " + Token
            },
            data: APIValues.CreateIPPostCall
        })
        const resp1json = await resp1.json()
        console.log(resp1json)
        expect(resp1.status()).toBe(201)
        expect(resp1json.data.ipAddress).toEqual(APIValues.CreateIPPostCall.ipAddress)
})