import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CatalogItem } from "../CatalogItem.component";
import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { Filter } from "../Filter.component";
import { CatalogHeader } from "../CatalogHeader.component";

export class MacbookAirPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public catalogItem = new CatalogItem(this.page);
    public filter = new Filter(this.page);
    public catalogHeader = new CatalogHeader(this.page);

    //Locators
    private root = this.page.locator(".catalog-subcategory .catalog-list");
    private filterButton = this.page.locator("button.btn-filter-collapse", {hasText: "Показати всі фільтри"});

    //Actions
    @step("Open macbook air page")
    async open(){
        await this.page.goto("/mac/macbook-air");
        await this.toBeLoaded();
    }

    @step('Click filter button "Показати всі фільтри"')
    async clickFilterButton(){
        await this.filterButton.click();
    }

    //Verify
    @step("Macbook air page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }
}