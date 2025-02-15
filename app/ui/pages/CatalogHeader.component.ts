import { expect } from "@playwright/test";
import { step } from "../../../helpers/step";
import { BaseComponent } from "../base/BaseComponent.abstract";

export class CatalogHeader extends BaseComponent {
    //Locators
    private root = this.page.locator("apr-catalog-list-header .catalog-list-header");
    private sortType = this.root.locator(".order-type", {hasText: " За ціною "});

    //Actions
    @step("Click sort by price")
    async clickSortByPrice(){
        await this.getResponseAfterClick({
            containUrl: "/catalog/products/category/mac/macbook-air", element: this.sortType});
    }

    //Verify

    @step("Catalog header to be visible")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

}