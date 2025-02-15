import { BasePage } from "../../base/BasePage.abstract";
import { PageSuffix } from "../../../PageSuffix";

export class ComparePage extends BasePage {
    async toBeLoaded(): Promise<void> {}

    async open(){
        await this.page.goto(PageSuffix.COMPARE_PAGE);
        await this.toBeLoaded();
    }

}