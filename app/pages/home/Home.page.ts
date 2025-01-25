import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { step } from "../../../helpers/step";

export class HomePage extends BasePage {
    public header = new Header(this.page);
    public searchHeader = new SearchHeader(this.page);
    public footer = new Footer(this.page);

    //Locators
    private routerLink = (name: string) => this.page.locator(`[routerlink=${name}]`).first();

    //Actions
    @step("Open home page")
    async open(){
        await this.page.goto("/");
    }

    @step("Click router link")
    async clickRouterLinkBy(data: {
        name: string
    }){
        await this.routerLink(data.name).click();
    }


}