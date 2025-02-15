import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class Filter extends BaseComponent {
    //Locators
    private root = this.page.locator("apr-page-filter-sidenav .page-sidenav");
    private filterValue = (name:string) => this.root.locator(".filter-value", {hasText: name});


    @step("Filter component  to be loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }


    //Actions
    @step("Select filter value")
    async selectFilterBy(data: {name: string}): Promise<void>{
        await this.filterValue(data.name).check();
    }
}