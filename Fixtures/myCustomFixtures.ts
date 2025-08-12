import {test as baseTest} from "@playwright/test" //Aliase

// Create Type Of Fixture Or Multiple Fixtures To Use It At The The baseTest.extend<> (){} Method 

type myTestFixtures = 
{
    fixture1 : any // From Type Any To Accept Any Data Format 
}

type myWorkFixtures = 
{
    workFixture1 : any
}

//Using the baseTest.extend Method Here To Intialize the The Fixtures 

export const test = baseTest.extend<myTestFixtures , myWorkFixtures>( //Here We Use The Generic Concept With Type myFixtures & myWorkFixtures
    {
        fixture1 : async ({} , Use)=>   //Using The Test Fixture 
            {
                const fixture1 = "i Am The Fixture 1"
                // Before part : This Part Will Be Used/Run Once Request The Fixture
                console.log("Before Part Of The Fixture1")
                // Use Method To Use The Test At Your Script 
                await Use(fixture1) ;
                // After part : This Part Will Be Used/Run After Using The Fixture
                console.log("After Part Of The Fixture1")

            } ,
            workFixture1 : [async({} , Use)=>  //Using The Work Fixture 
            {
                const workFixture1 = "I Am The Work Fixture 1"
                console.log("Before Part Of The Work Fixture1")
                await Use(workFixture1)
                console.log("After Part Of The Work Fixture 1")
            }, {scope : "worker"}]
    })

    // Test Fixture : It's Run Per Every Test 
    // Work Fixture : It's Run Per Every Workrer

