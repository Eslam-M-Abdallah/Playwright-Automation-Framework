import {Locator, Page} from "@playwright/test"

export class homePage 
{
  readonly page : Page
  readonly homePageHeader : Locator
  readonly backpackAddToCartButton : Locator
  readonly backpackRemoveButton : Locator
  readonly cartIcon : Locator

    constructor(page : Page) 
    {
        this.page = page
        this.homePageHeader = page.locator("text=Swag Labs")
        this.backpackAddToCartButton = page.locator("#add-to-cart-sauce-labs-backpack")
        this.backpackRemoveButton = page.locator("#remove-sauce-labs-backpack")
        this.cartIcon = page.locator("#shopping_cart_container")
    }

    async backpackAddToCart()
    {
        await this.backpackAddToCartButton.click()
    }

    async gotoCart()
    {
        await this.cartIcon.click()
    }
}