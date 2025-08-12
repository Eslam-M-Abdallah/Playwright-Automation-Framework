
import {Locator, Page} from "@playwright/test" // import Page From @playwright/test Package To Can Use It At The Class 

export class loginPage  // Add Export Keyword To Allow The Other Modules To Import These Class 
{
// Declare The Properties (Allocators) With Readonly Keyword

    readonly page : Page ;
    readonly usernameTextBox : Locator
    readonly passwordTextBox : Locator
    readonly logibButton : Locator

    constructor (page : Page) //Adding The Class constructor That Accept page Argument As Page Type 
    {
        // intializing The Allocators/Properties Values Inside The constructor
        this.page = page ;
        this.usernameTextBox = page.locator("#user-name")
        this.passwordTextBox = page.locator("#password")
        this.logibButton = page.locator("#login-button")

    }

    // Here We Will Add The Action Method 

    async openApplication()
    {
        await this.page.goto("https://www.saucedemo.com/")
    }
    
    async login(usernameVal : string , passwordVal : string)
    {
        await this.usernameTextBox.fill(usernameVal)
        await this.passwordTextBox.fill(passwordVal) 
        await this.logibButton.click()
    }
}