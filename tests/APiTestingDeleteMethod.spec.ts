import { test, expect } from "@playwright/test"

test("Api Testing Practise Delete Call", async ({ request }) => {
    const resp = await request.delete("https://fakerestapi.azurewebsites.net/api/v1/Users/1",
        {
            headers:
            {
                accept: "*/*"
            }
        })
    expect(resp.status()).toBe(200)
    const resptext = await resp.text()
    expect(resptext).toEqual("")

    //You Can Do The Get Call At The Same ID To Check If The Id Is Already Dleted Or Not 
    const resp2 = await request.get("https://fakerestapi.azurewebsites.net/api/v1/Users/11515",
        {
            headers:
            {
                accept: "*/*"
            }
        })
    console.log(resp2.status())
    expect(resp2.status()).toBe(404)
})

