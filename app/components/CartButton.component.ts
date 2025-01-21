import { BaseComponent } from "../base/BaseComponent";
import { Badge } from "./Badge.component";

export class CartButton extends BaseComponent{
    public badge = new Badge(this.page)
}