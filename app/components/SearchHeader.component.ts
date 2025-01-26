import { BaseComponent } from "../base/BaseComponent.abstract";
import { SearchForm } from "./SearchForm.component";
import { SearchHelper } from "./SearchHelper.component";

export class SearchHeader extends BaseComponent {
    public searchForm = new SearchForm(this.page);
    public searchHelper = new SearchHelper(this.page);

    async toBeVisible(): Promise<void> {}

}