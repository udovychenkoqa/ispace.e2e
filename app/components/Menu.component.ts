import { BaseComponent } from "../base/BaseComponent";
import { Badge } from "./Badge.component";

export class Menu extends BaseComponent {
    public badge = new Badge(this.page)
}