import {test} from "../Fixtures/myCustomFixtures" // Import Test (My Custom Fixture) From Fixtures Folder

test("Practise 1" ,async({fixture1 , workFixture1})=> // Using My Custom Fixture At The Test Script 
    {
        console.log(fixture1)
        console.log(workFixture1)
    })

test("Practise 2",async({fixture1})=>
    {
        console.log(fixture1)
    })