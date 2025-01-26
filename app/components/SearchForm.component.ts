import { expect } from "@playwright/test";
import { step } from "../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class SearchForm extends BaseComponent {
    //Locators
    private root = this.page.locator('input[placeholder="Новий пошук ..."]');
    private searchIcon = this.page.locator('button.btn-search [data-icon="search"]');

    //Actions
    @step("Fill search input")
    async fillInput(searchCriteria: string): Promise<void> {
        await this.toBeLoaded();
        await this.root.fill(searchCriteria);
    }
    @step("Click search icon")
    async clickSearchIcon(): Promise<void> {
        await this.toBeLoaded();
        await this.searchIcon.click();
    }

    //Verify
    @step("Search to be loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }
}