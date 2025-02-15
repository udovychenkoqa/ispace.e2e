import { BaseComponent } from "../base/BaseComponent.abstract";
import { SearchForm } from "./SearchForm.component";
import { SearchHelper } from "./SearchHelper.component";

export class SearchHeader extends BaseComponent {
    readonly searchForm = new SearchForm(this.page);
    readonly searchHelper = new SearchHelper(this.page);

    async toBeLoaded(): Promise<void> {}

}