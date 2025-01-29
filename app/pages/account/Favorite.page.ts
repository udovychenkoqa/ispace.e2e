import { step } from "../../../helpers/step";
import { BasePage } from "../../base/BasePage.abstract";
import { Footer } from "../../components/Footer.component";
import { Header } from "../../components/Header.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CategoryItem } from "../macbook/CategoryItem.component";
import { expect } from "@playwright/test";

export class FavoritePage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);
    readonly categoryItem = new CategoryItem(this.page);
    //Locators
    private root = this.page.locator(".account-favorites .catalog-list");
    private items = this.root.locator(".catalog-list-item");

    @step("Favorite page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions
    @step("Open Favorite page")
    async open(){
        await this.page.goto("/account/favorites");
        await this.toBeLoaded();
    }

    //Assert
    @step("Array to have count product items")
    async expectCatalogListToHaveCount(value: number){
        await expect(this.items).toHaveCount(value);
    }

}