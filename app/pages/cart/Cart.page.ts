import { step } from "../../../helpers/step";
import { BasePage } from "../../base/BasePage.abstract";
import { Footer } from "../../components/Footer.component";
import { Header } from "../../components/Header.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { expect } from "@playwright/test";
import { ProductItem } from "./ProductItem.component";

export class CartPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public productItem= new ProductItem(this.page);
    //Locators
    private items = this.page.locator(".cart-product-list .product-list-item");

    //Actions
    @step("Open Cart page")
    async open(){
        await this.page.goto("/cart");
    }

    //Assert
    @step("Array to have count product items")
    async expectProductListToHaveCount(value: number){
        await expect(this.items).toHaveCount(value);
    }

}