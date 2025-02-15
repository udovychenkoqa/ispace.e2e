import { step } from "../../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";
import { expect } from "@playwright/test";

export class ProductItem extends BaseComponent {
    //Locators
    private root = this.page.locator(".cart-product-list .product-list-item");
    private plusButton = this.page.locator('.input-group-append button[type="button"]', {hasText: "+"});
    private minusButton = this.page.locator('.input-group-prepend button[type="button"]', {hasText: "-"});
    private price = this.root.locator(".product-prices .price.price-default");
    private step = this.root.locator('[type= "number"]');


    //Actions
    @step("Click plus button")
    async clickPlusButton() {
        await this.plusButton.click();
    }

    @step("Click minus button")
    async clickMinusButton() {
        await this.minusButton.click();
    }

    @step("Step to be changed")
    async stepToBeChanged(value: number){
        await expect(this.step).toHaveJSProperty("valueAsNumber", value);
    }

    @step("Get price product")
    async getPriceProduct() {
        return await this.price.innerText();
    }

    //Verify
    @step("Price to increase")
    async expectPriceToIncrease(data: { oldPrice: string, newPrice: string }) {
        const extractNumber = (price: string): number =>
            parseFloat(price.replace(/[^\d.]/g, "").trim());
        const oldAmount = extractNumber(data.oldPrice);
        const newAmount = extractNumber(data.newPrice);

        expect(oldAmount).toBeLessThan(newAmount);
    }

    @step("Price to decrease")
    async expectPriceToDecrease(data: { newPrice: string, oldPrice: string }) {
        const extractNumber = (price: string): number =>
            parseFloat(price.replace(/[^\d.]/g, "").trim());
        const oldAmount = extractNumber(data.oldPrice);
        const newAmount = extractNumber(data.newPrice);

        expect(newAmount).toBeGreaterThan(oldAmount);
    }

    @step("Product list to be visible")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

}