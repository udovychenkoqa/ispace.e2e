import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CategoryItem } from "./CategoryItem.component";

export class MacPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public categoryItem = new CategoryItem(this.page);

    //Actions
    async open(){
        await this.page.goto("/mac");
    }
}