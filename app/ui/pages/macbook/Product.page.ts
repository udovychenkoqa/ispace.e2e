import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { expect } from "@playwright/test";
import { step } from "../../../../helpers/step";
import { Filter } from "../Filter.component";

export class ProductPage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);
    readonly filter = new Filter(this.page);

    //Locators
    private root = this.page.locator(".product-page .product-page-head");
    private cartButton = this.page.locator(
        ".buy-btn-container button.btn.btn-base  .ng-star-inserted", { hasText: "кошик"});

    //Actions
    @step("Open product detail macbook")
    async open(path: string){
        await this.page.goto(path);
        await this.toBeLoaded();
    }

    @step("Click Cart button and get cart_product_id")
    async addProductToCartAt(): Promise<string>{
        const parseBody = await this.getResponseAfterClick({
            containUrl: "/cart", element: this.cartButton });
        return parseBody.products?.[0]?.cart_product_id;
    }

    @step("Click Go to cart button")
    async clickGoToCartButton(): Promise<void>{
        this.cartButton.click();
    }


    //Verify
    @step("Product detail macbook loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    @step("Cart button to have text Перейти до кошику")
    async expectCartButtonToHaveText(value: string): Promise<void> {
        await expect(this.cartButton).toHaveText(value);
    }
}