import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class SearchHelper extends BaseComponent {
    //Locators
    private helperList = this.page.locator(".header-search-inner .search-helper-list");
    private helperLink = (name: string) => this.helperList.locator(".helper-link", {hasText: name});

    //Actions
    @step(`Click helper link`)
    async clickHelperLinkBy(data: { name: string }){
        await this.helperLink(data.name).click();
    }
}