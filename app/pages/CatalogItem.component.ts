import { expect } from "@playwright/test";
import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class CatalogItem extends BaseComponent {
    //Locators
    private root = this.page.locator(".catalog-list-item");
    private favoriteButton = this.page.locator("button.btn-favorite");
    private cartButton = this.page.locator("button.btn.btn-base .ng-star-inserted", {hasText: "В кошик"});


    @step("Catalog item to be visible")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }


    //Actions
    @step("Click Favorite button and get product id")
    async addProductToFavoriteAt(data: { number: number }): Promise<string>{
        const responsePromise = this.page.waitForResponse((response) =>
            response.url().includes("/favorite")
        );
        await this.favoriteButton.nth(data.number - 1).click();
        const response = await responsePromise;
        const parseBody = await response.json();
        return parseBody[0].id;
    }

    @step("Click Cart button and get product id")
    async addProductToCartAt(data: { number: number }): Promise<string>{
        const responsePromise = this.page.waitForResponse((response) =>
            response.url().includes("/cart")
        );
        await this.cartButton.nth(data.number - 1).click();
        const response = await responsePromise;
        const parseBody = await response.json();
        return parseBody.products?.[0]?.cart_product_id;
    }
}