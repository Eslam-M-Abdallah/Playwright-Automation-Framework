import {test , expect} from "@playwright/test"



test("Practise On Different Types Of Click " , async({page})=>
    {

        // Click() Method : Make human Click On WebPage Elements 

        //test.slow();
        //await page.goto("https://www.builder.ai/")
        //expect(page.locator('#heroBtnCta').getByRole('link', { name: 'Get a free demo' })).toBeEnabled();
        //await page.locator('#heroBtnCta').getByRole('link', { name: 'Get a free demo' }).click()
        //await page.locator("button#_form_ac_submit").click(); 

        // dblclick() Method : To Perfoem Double Click Action 

        await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
        await page.locator("text = Add Element").dblclick();
        await expect(page.locator("text= Delete")).toHaveCount(2);

        //dispatchEvent('click') Method : It's Allow To Me To Force/Direct Click on The WebElement Directlly by Access It's HTML Structure Or DOM You Can Although Use click({force : 'true'}) Option To Make The Force Web Elemnt Click & This Action Is Useful In Some Case When The Element That You Want To Click Is Intercepted With Another Web Elements 
        await page.getByRole('button', { name: 'Delete' }).first().dispatchEvent('click')

        //click({button : 'Right'}) Method : It's Perform Right Click Action On The Web Elements 

        //await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //await page.getByText('right click me', { exact: true }).click({button : "right"});
        //await page.getByText('right click me', { exact: true }).press("ArrowDown+ArrowDown+ArrowDown")
        //await page.getByText('right click me', { exact: true }).press("Enter")

    })