import { step } from "../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";
import { expect } from "@playwright/test";

export class ProductItem extends BaseComponent {
    //Locators
    private root = this.page.locator(".cart-product-list .product-list-item");
    private plusButton = this.page.locator('.input-group-append button[type="button"]', {hasText: "+"});
    private minusButton = this.page.locator('.input-group-prepend button[type="button"]', {hasText: "-"});
    private price = this.root.locator(".product-prices .price");


    //Actions
    @step("Click plus button")
    async clickPlusButton() {
        await this.plusButton.click();
    }

    @step("Click minus button")
    async clickMinusButton() {
        await this.minusButton.click();
    }

    //Verify
    @step("Price is changed")
    async expectPriceToBeChanged(value: string) {
        await expect(this.price).toHaveText(value);
    }

    @step("Product list to be visible")
    async toBeVisible(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

}