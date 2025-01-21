import { BaseComponent } from "../base/BaseComponent";
import { Badge } from "./Badge.component";

export class WishlistButton extends BaseComponent {
    public badge = new Badge(this.page)
}