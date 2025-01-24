import { BasePage } from "../../base/BasePage.abstract";

export class ComparePage extends BasePage {

    async open(){
        await this.page.goto("/compare");
    }

}