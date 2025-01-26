import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { step } from "../../../helpers/step";
import { expect } from "@playwright/test";

export class SearchPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);

    //Locators
    private root = this.page.locator(".search-result .search-result-list").first();
    private items = this.root.locator(".list-item a.descr-text-bold");

    //Actions
    @step("Open search page with products")
    async open(query: string){
        await this.page.goto(`/search?q=${query}`);
        await this.toBeLoaded();
    }

    //Verify
    @step("Search page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
        await expect(this.root).not.toHaveJSProperty("naturalWidth", 0);
    }

    @step("Expect item to contain text")
    async expectSearchItemsToContain(searchCriteria: RegExp): Promise<void> {
        await this.toBeLoaded();
        for(const item of await this.items.all()){
            await expect(item).toHaveText(searchCriteria);
        }
    }
}