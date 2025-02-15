import { step } from "../../../../helpers/step";
import { BaseComponent } from "../../base/BaseComponent.abstract";

export class CategoryItem extends BaseComponent {
    //Locators
    private item = (name: string) => this.page.locator(`.category-list [href="/ua/mac/${name}"]`);


    async toBeLoaded(): Promise<void> {}

    //Actions
    @step("Click category item")
    async clickItemBy(data: {
            name: string
        }){
        await this.item(data.name).click();
    }
}