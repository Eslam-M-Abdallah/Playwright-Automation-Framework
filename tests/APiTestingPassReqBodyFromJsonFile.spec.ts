import { test, expect } from "@playwright/test"

import APijson from "../TestData/APIData.json" //Import The Post Request Data From External Json File

test("APi Testing Practise Pass Req Body From Json Post Call 1", async ({ request }) => {
    const resp1 = await request.post("https://fakerestapi.azurewebsites.net/api/v1/Books",
        {
            headers:
            {
                accept: "*/*",
                "Content-Type": "application/json; v=1.0"
            },
            data: APijson.PostCallData
        })

    const resp1json = await resp1.json()
    console.log(resp1json)
    expect(resp1.status()).toBe(200)
    expect(resp1json.title).toEqual(APijson.PostCallData.title)
})

test("APi Testing Practise Pass Req Body From Json Put Call 1", async ({ request }) => {
    const resp2 = await request.put("https://fakerestapi.azurewebsites.net/api/v1/Books/5",
        {
            headers:
            {
                accept: "*/*",
                "Content-Type": "application/json; v=1.0"
            },
            data: APijson.PutCallData
        })
    const resp2json = await resp2.json()
    console.log(resp2json)
    expect(resp2.ok()).toBeTruthy()
    expect(resp2.status()).toBe(200)
    expect(resp2json).toMatchObject(APijson.PutCallData)
    expect(resp2json.description).toEqual(APijson.PutCallData.description)
})