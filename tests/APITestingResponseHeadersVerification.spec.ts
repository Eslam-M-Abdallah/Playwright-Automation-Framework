import {test , expect} from "@playwright/test"

test("Fetch & Validate Response Headers",async({request})=>
    {
        const getResponse = await request.get("/booking/1")
        const headersValues = getResponse.headers()
        console.log(headersValues)
        expect(getResponse.status()).toBe(200)
        expect(headersValues.server).toEqual("Heroku")
        expect(headersValues["x-powered-by"]).toEqual("Express")

        console.log("*******************1*********************")

        const headersArrayValues = getResponse.headersArray() //If You Want To Store The Headers Inside Array Each Array Element Have Object Contain The Header Name & Value 
        console.log(headersArrayValues)
        expect(headersArrayValues.length).toBe(10)
        expect(headersArrayValues[2].name).toEqual("Date")

        console.log("*******************2*********************")

        headersArrayValues.forEach((header)=>
            {
                //console.log(header) // If I Want To Print The Headers Inside The Array Seperatlly
                //console.log(header.value) // If I Want To Print The Headers Values Inside The Array Seperatlly
                console.log(header.name + " => " + header.value) //If I Want To Print The Headers Names & Values Inside The Array Seperatlly
            })
    })