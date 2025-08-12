import {test} from "@playwright/test"


test("LocatELementsUsingDifferentMethods" , async ({page})=>
    {
        await page.goto("https://www.saucedemo.com/") ;

// Locate The Web elements Using The Relative Xpath Ex ( //tagName[@AttribuiteName = 'The AttribuiteValue'] )

        await page.locator("//input[@id = 'user-name']").fill("standard_user");

// Locate The Web elements Using The Css Selector Ex ( 1- TageName.ClassValue , 2- TageName#Idvalue  , 3- TageName[attribuiteName= attribuiteValue] )
        await page.locator("input#password").fill("secret_sauce");
        await page.locator("input[value=Login]").click();
//  Locate The Web elements Using The Text  Ex ( 1- Text = 'Text Value' Case Sensative , 2- text = Text Value Case Non Sensative )
        await page.locator("text = Sauce Labs Backpack").click();    

// Locate The Web elements Using The Id/ data-test / data-test.id  Ex ( id= idValue , data-test= value)
        //await page.locator("data-test = add-to-cart").click()
        await page.locator("id=add-to-cart").click();  
        
    })

// Using The Locator Method With Options Argumets (has , hasNot , hasText , hasNot text )
test("Practise On Locator Method Using Options" , async({page})=>
    {
        //has Option
        await page.goto("https://www.saucedemo.com/") 
        await page.locator(".form_group" , {has : page.locator("#user-name")} ).click(); 
        await page.locator(".form_group" , {has : page.locator("#user-name")} ).pressSequentially("standard_user");

        //hasNot Option

        await page.locator(".form_group" , {hasNot : page.locator("#user-name")} ).click(); 
        await page.locator(".form_group" , {hasNot : page.locator("#user-name")} ).pressSequentially("secret_sauce");


        //hasText Option

        await page.locator("input[value=Login]").click();
       // await page.locator("//a" , {hasText : "Sauce Labs Backpack"}).click(); 


        //hasNotText Option using Value Be Regular Expression Ex (/Sauce.*/)

        await page.locator(".inventory_item_name" , {hasNotText : /Sauce Labs.*/}).click();

    })


        // Using GetBy Methods To Allocate The Web Elements 
        
        test("Practise On GetBy Methods" , async ({page})=>
            {
                await page.goto("https://demo.nopcommerce.com/login");
                
                // GetBy Label : It's used With Input Fields To Allocated the Input Fields Using The Label Name 

                await page.getByLabel("Email" , {exact : false}).fill("Test@test.com");

                // GetBy Text : It's used With Non-Interactive Web elements Like (Div , Spam , P) And Can Get The Text (Full Text , Partial Text , RegExp)

                const textValue =  await page.getByText("New Customer" , {exact : true}).textContent()
                console.log(textValue) ; 

                // GetBy AltText : It's used With Allocated The Elements Using AltText Like (Img , Area Inputs)

                await page.getByAltText("nopCommerce demo store").click();

                // GetBy Title : It's used With Allocated The Elements That Have Title Attribuite

                await page.getByTitle("Show products in category Electronics").first().click()


                // GetBy Placeholder : It's used With Input Fields That Not Have Labels But Have Placeholder 

                 //await page.getByPlaceholder("Search store").fill("Iphone 16 Pro Max");

                // GetBy Role : It's used To Allocated The Elements That Using His Role And This Is Reccomended By Playwright Cause It's The Closest Way That The user Interact With the Web Elements Ex (getByRole('AttribuiteName' , {Name : Atrribuite Text Value}))
                 //await page.getByRole('button', { name: 'Search' }).click() ;

                // GetBy testId : It's used To Allocated The Elements That Have data-test  Attribuite And Not Can allocated The Element  Using The getByRole Or getByText

                await page.goto("https://www.saucedemo.com/");
                await page.getByTestId("username").fill("standard_user");
                await page.getByTestId("password").fill("secret_sauce");
                await page.getByTestId("login-button").click()
            }) 

            
