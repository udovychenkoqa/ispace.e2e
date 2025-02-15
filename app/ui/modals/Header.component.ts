import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class Header extends BaseComponent {

    //Locators
    private root = this.page.locator("apr-modal-header .mat-modal-header");
    private closeButton = this.root.locator(".btn.btn-close-modal");

    @step(`Header modal to be visible`)
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions
    @step("Click Close Button")
    async clickCloseButton (){
        await this.toBeLoaded();
        await this.closeButton.click();
    }

}