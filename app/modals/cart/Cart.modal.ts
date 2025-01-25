import { BaseComponent } from "../../base/BaseComponent.abstract";
import { Header } from "../Header.component";

export class CartModal extends BaseComponent {
    public header = new Header(this.page);

    //locators
    private root = this.page.locator(".add-to-cart-modal");


    //Actions


}