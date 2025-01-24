import { BaseComponent } from "../base/BaseComponent.abstract";
import { Counter } from "./Counter.component";

export class CartButton extends BaseComponent{
    public counter = new Counter(this.page);
}