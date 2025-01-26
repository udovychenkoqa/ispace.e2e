import { BasePage } from "../../base/BasePage.abstract";

export class ComparePage extends BasePage {
    async toBeLoaded(): Promise<void> {}

    async open(){
        await this.page.goto("/compare");
        await this.toBeLoaded();
    }

}