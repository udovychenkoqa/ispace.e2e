import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";
import { Header } from "../Header.component";

export class CartModal extends BaseComponent {
    readonly header = new Header(this.page);

    //locators
    private root = this.page.locator(".add-to-cart-modal");

    @step(`Cart modal to be visible`)
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions


}