import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CatalogItem } from "../CatalogItem.component";
import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";

export class MacbookAirPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public catalogItem = new CatalogItem(this.page);

    //Locators
    private root = this.page.locator(".catalog-subcategory .catalog-list");

    //Actions
    @step("Open macbook air page")
    async open(){
        await this.page.goto("/mac/macbook-air");
        await this.toBeLoaded();
    }

    //Verify
    @step("Mac page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }
}