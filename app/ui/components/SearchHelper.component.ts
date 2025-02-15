import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class SearchHelper extends BaseComponent {
    //Locators
    private root = this.page.locator(".header-search-inner .search-helper-list");
    private helperLink = (name: string) => this.root.locator(".helper-link", {hasText: name});

    @step(`Search helper to be visible`)
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions
    @step(`Click helper link`)
    async clickHelperLinkBy(data: { name: string }){
        await this.helperLink(data.name).click();
    }
}