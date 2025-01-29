import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CategoryItem } from "./CategoryItem.component";
import { step } from "../../../helpers/step";
import { expect } from "@playwright/test";

export class MacPage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);
    readonly categoryItem = new CategoryItem(this.page);

    //Locators
    private root = this.page.locator(".row .category-list");

    //Actions
    async open(){
        await this.page.goto("/mac");
        await this.toBeLoaded();
    }

    //Verify
    @step("Mac page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }
}