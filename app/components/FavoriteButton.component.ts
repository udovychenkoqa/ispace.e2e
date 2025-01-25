import { BaseComponent } from "../base/BaseComponent.abstract";
import { expect } from "@playwright/test";


export class FavoriteButton extends BaseComponent {
    //locators
    private counter = this.page.locator("nav .btn-header-favorite .count");

    //Assert
    async expectCounterToHaveText(value: string){
        expect(this.counter).toHaveText(value);
    }
}