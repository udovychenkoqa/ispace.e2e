import { step } from "../../../helpers/step";
import { BasePage } from "../../base/BasePage.abstract";
import { Footer } from "../../components/Footer.component";
import { Header } from "../../components/Header.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { expect } from "@playwright/test";
import { ProductItem } from "./ProductItem.component";

export class CartPage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);
    readonly productItem= new ProductItem(this.page);
    //Locators
    private root = this.page.locator(".cart-product-list");
    private items = this.root.locator(".product-list-item");

    @step("Cart page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions
    @step("Open Cart page")
    async open(){
        await this.page.goto("/cart");
        await this.toBeLoaded();
    }

    //Assert
    @step("Array to have count product items")
    async expectProductListToHaveCount(value: number){
        await expect(this.items).toHaveCount(value);
    }

}