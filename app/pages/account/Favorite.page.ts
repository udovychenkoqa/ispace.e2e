import { step } from "../../../helpers/step";
import { BasePage } from "../../base/BasePage.abstract";
import { Footer } from "../../components/Footer.component";
import { Header } from "../../components/Header.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CategoryItem } from "../macbook/CategoryItem.component";
import { expect } from "@playwright/test";

export class FavoritePage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public categoryItem = new CategoryItem(this.page);
    //Locators
    private items = this.page.locator(".catalog-list .catalog-list-item");

    //Actions
    @step("Open Favorite page")
    async open(){
        await this.page.goto("/account/favorites");
    }

    //Assert
    @step("Array to have count product items")
    async expectCatalogListToHaveCount(value: number){
        await expect(this.items).toHaveCount(value);
    }

}