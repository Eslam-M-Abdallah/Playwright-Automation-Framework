import {test} from "@playwright/test"

test.describe("My Test Group",async()=>
    {
        // TestMethod 1 
        test("My First Test ",async()=>
            {
                console.log("My First Test Is Here ")
            })
        // TestMethod 2 
        test("My Second Test ",async()=>
            {
                console.log("My Second Test Is Here ")
            })
        // TestMethod 3
        test("My Third Test ",async()=>
            {
                console.log("My Third Test Is Here ")
            })
        
    })