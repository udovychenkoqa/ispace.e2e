import { BasePage } from "../../base/BasePage";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";

export class HomePage extends BasePage { 
    public header = new Header(this.page)
    public footer = new Footer(this.page)

    async open(){
        this.page.goto("/")
    }
}