import { BasePage } from "../../base/BasePage";

export class ComparisonPage extends BasePage {

    async open(){
        await this.page.goto("/comparison")
    }

}