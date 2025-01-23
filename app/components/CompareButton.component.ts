import { BaseComponent } from "../base/BaseComponent.abstract";
import { Counter } from "./Counter.component";

export class CompareButton extends BaseComponent{
    public counter = new Counter(this.page)
}