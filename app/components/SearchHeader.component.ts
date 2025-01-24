import { BaseComponent } from "../base/BaseComponent.abstract";
import { SearchForm } from "./SearchForm.component";

export class SearchHeader extends BaseComponent { 
    public searchForm = new SearchForm(this.page);
    
}