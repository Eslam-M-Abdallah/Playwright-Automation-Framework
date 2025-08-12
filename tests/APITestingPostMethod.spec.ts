import { test, expect } from "@playwright/test"

test("APi Testing Post Call 1", async ({ request }) => {
    const resp1 = await request.post("/booking",
        {
            data: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        })
    const resp1json = await resp1.json()
    console.log(resp1json)
    expect(resp1.status()).toBe(200)
    expect(resp1.statusText()).toBe("OK")
    expect(resp1.ok()).toBeTruthy()
    expect(resp1json.booking).toMatchObject(
        {
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Breakfast'
        })
        expect(resp1json.booking.additionalneeds).toEqual("Breakfast")
})

test("Ui With API Testing Verification",async({request ,page})=>
    {
        const resp2 = await request.post("https://api.demoblaze.com/addtocart",
            {
                data : {"id":"288f4813-06cf-fa84-cd3f-b92ad5ffc488","cookie":"RXNsYW1Nb2hhbWVkOTg5ODE3NTQ4Mjc=","prod_id":3,"flag":true}
            })
            expect(resp2.status()).toBe(200)
            //const resp2json = await resp2.json()
            console.log(resp2)
            await page.goto("https://demoblaze.com/index.html")
            await page.locator("#login2").click()
            await page.locator("#loginusername").fill("EslamMohamed9898")
            await page.locator("#loginpassword").fill("Password500$$")
            await page.getByRole('button', { name: 'Log in' }).click()
            await page.locator("#cartur").click()
            await page.waitForTimeout(10000);
            await expect(page.getByRole('cell', { name: 'Nexus' })).toHaveText("Nexus 6")

    })