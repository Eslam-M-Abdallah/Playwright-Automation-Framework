import { test, expect } from "@playwright/test"

test("API Testing Practise Put Call 1", async ({ request }) => {
    const resp1 = await request.put("https://fakerestapi.azurewebsites.net/api/v1/Books/2",
        {
            headers:
            {
                accept: "*/*",
                "Content-Type": "application/json; v=1.0"
            },
            data: { "id": 2, "title": "Eslam", "description": "Mohamed", "pageCount": 10, "excerpt": "string", "publishDate": "2025-08-04T11:42:57.699Z" }
        })
    const respjson = await resp1.json()
    console.log(respjson)
    expect(resp1.status()).toBe(200)
    //expect(resp1.statusText).toBe("OK")
    expect(resp1.ok()).toBeTruthy()
    expect(respjson).toMatchObject({
        id: 2,
        title: 'Eslam',
        description: 'Mohamed',
        pageCount: 10,
        excerpt: 'string',
        publishDate: '2025-08-04T11:42:57.699Z'
    })
    expect(respjson.title).toEqual("Eslam")

    //Get Call To Just Check The Updated Put Call Result 
   const resp2 = await request.get("https://fakerestapi.azurewebsites.net/api/v1/Books/2");
   const resp2json = await resp2.json() ; 
   console.log(resp2json)
   expect(resp2.status()).toBe(200)
   expect(resp2json.pageCount).toEqual(200)

})