import { step } from "../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";

export class CatalogItem extends BaseComponent {
    //Locators
    private favoriteButton = this.page.locator("button.btn-favorite");


    //Actions
    @step("Click Favorite button and get product id")
    async addProductToFavoriteAt(data: { number: number }) {
        const responsePromise = this.page.waitForResponse((response) =>
            response.url().includes("/favorite")
        );
        await this.favoriteButton.nth(data.number - 1).click();
        const response = await responsePromise;
        const parseBody = await response.json();
        return parseBody[0].id;
    }

}