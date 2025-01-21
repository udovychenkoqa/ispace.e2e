import { BaseComponent } from "../base/BaseComponent";
import { Suggest } from "./Suggest.component";

export class SearchForm extends BaseComponent {
    public suggest = new Suggest(this.page)
    
}