import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";
import { expect } from "@playwright/test";


export class FavoriteButton extends BaseComponent {
    //locators
    private counter = this.page.locator("nav .btn-header-favorite .count");


    @step("Header to be visible")
    async toBeVisible(): Promise<void> {
        await expect(this.counter).toBeVisible();
    }

    //Assert
    @step("Counter to Have Text")
    async expectCounterToHaveText(value: string){
        expect(this.counter).toHaveText(value);
    }
}