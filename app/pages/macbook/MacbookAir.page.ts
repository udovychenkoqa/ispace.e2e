import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { CatalogItem } from "../CatalogItem.component";

export class MacbookAirPage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);
    public catalogItem = new CatalogItem(this.page);

    //Actions
    async open(){
        await this.page.goto("/mac/macbook-air");
    }
}