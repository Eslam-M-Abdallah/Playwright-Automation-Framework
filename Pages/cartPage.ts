import { Locator, Page } from "@playwright/test";

export class cartPage
{
    readonly page : Page
    readonly backpackItemLink : Locator

    constructor(page : Page)
    {
        this.page = page
        this.backpackItemLink = page.locator(".inventory_item_name")
    }
}