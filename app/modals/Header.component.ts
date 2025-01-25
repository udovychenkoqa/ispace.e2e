import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class Header extends BaseComponent {

    //Locators
    private root = this.page.locator("apr-modal-header .mat-modal-header");
    private closeButton = this.root.locator(".btn.btn-close-modal");

    //Actions
    @step("Click Close Button")
    async clickCloseButton (){
        await this.closeButton.click();
    }

}