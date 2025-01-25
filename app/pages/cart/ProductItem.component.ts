import { step } from "../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";
import { expect } from "@playwright/test";

export class ProductItem extends BaseComponent {
    //Locators
    private root = this.page.locator(".cart-product-list .product-list-item");
    private minusButton = this.root.locator("button.btn.btn-light", { hasText: /-/});
    private plusButton = this.root.locator("button.btn.btn-light", { hasText: "+"});
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
    async expectPriceToBeChanged(value: string) {
        await expect(this.price).toHaveText(value);
    }

}