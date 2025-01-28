import { expect } from "@playwright/test";
import { BaseComponent } from "../base/BaseComponent.abstract";
import { step } from "../../helpers/step";

export class CompareButton extends BaseComponent{
    //locators
    private counter = this.page.locator("nav .btn.btn-header-compare .count");


    @step("Favorite button to be visible")
    async toBeLoaded(): Promise<void> {
        await expect(this.counter).toBeVisible();
    }

    //Assert
    @step("Counter to Have Text")
    async expectCounterToHaveText(value: string){
        await expect(this.counter).toHaveText(value);
    }
}