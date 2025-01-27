import { expect } from "@playwright/test";
import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class CatalogItem extends BaseComponent {
    //Locators
    private root = this.page.locator(".catalog-list-item");
    private favoriteButton = this.page.locator("button.btn-favorite");
    private cartButton = this.page.locator("button.btn.btn-base .ng-star-inserted", {hasText: "В кошик"});
    private itemNames = this.root.locator(".item-description .item-info a.item-name");
    private itemPrises = this.root.locator(".item-description .item-bottom-info p.price");
    private images = this.root.locator(".item-image img");


    @step("Catalog item to be visible")
    async toBeLoaded(): Promise<void> {
        for(const element of await this.root.all()){
            await expect(element).toBeVisible();
            await expect(element).not.toHaveJSProperty("naturalWidth", 0);
        }
    }


    //Actions
    @step("Get price all items")
    async getPriceAllItems(): Promise<Array<number>> {
        await this.toBeLoaded();
        const priceItems: Array<number> = [];
        for (const item of await this.itemPrises.all()) {
            const text: string = await item.innerText();
            const amount: number = parseFloat(
                text.split("").filter(el => !isNaN(Number(el))).join("").trim());
            priceItems.push(amount);
        }
        return priceItems.slice(0, 23);
    }


    //Verify
    @step("Expect item name to contain text")
    async expectItemsNameToContain(searchCriteria: RegExp): Promise<void> {
        await this.toBeLoaded();
        for(const itemName of await this.itemNames.all()){
            await expect(itemName).toHaveText(searchCriteria);
        }
    }

    @step("Click Favorite button and get product id")
    async addProductToFavoriteAt(data: { number: number }): Promise<string>{
        const parseBody = await this.getResponseAfterClick({
            containUrl: "/favorite", element: this.favoriteButton.nth(data.number - 1)});
        return parseBody[0].id;
    }

    @step("Click Cart button and get cart_product_id")
    async addProductToCartAt(data: { number: number }): Promise<string>{
        const parseBody = await this.getResponseAfterClick({
            containUrl: "/cart", element: this.cartButton.nth(data.number - 1)});
        return parseBody.products?.[0]?.cart_product_id;
    }

    expectItemsSortedDescendingByPrice = async (originalArray: Array<number>) => {
        const sortedArray: Array<number> = originalArray.slice().sort((a, b) => b - a);
        expect(originalArray).toEqual(sortedArray);
    };
}