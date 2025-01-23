import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";

export class HomePage extends BasePage { 
    public header = new Header(this.page)
    public searchHeader = new SearchHeader(this.page)
    public footer = new Footer(this.page)

    async open(){
        await this.page.goto("/")
    }
}