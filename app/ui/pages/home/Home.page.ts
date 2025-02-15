import { BasePage } from "../../base/BasePage.abstract";
import { Header } from "../../components/Header.component";
import { Footer } from "../../components/Footer.component";
import { SearchHeader } from "../../components/SearchHeader.component";
import { step } from "../../../../helpers/step";
import { expect } from "@playwright/test";
import { PageSuffix } from "../../../PageSuffix";

export class HomePage extends BasePage {
    readonly header = new Header(this.page);
    readonly searchHeader = new SearchHeader(this.page);
    readonly footer = new Footer(this.page);

    //Locators
    private root = this.page.locator(".category-panels .container");
    private routerLink = (name: string) => this.root.locator(`[routerlink=${name}]`).first();



    //Actions
    @step("Open home page")
    async open(){
        await this.page.goto(PageSuffix.HOME_PAGE);
        await this.toBeLoaded();
    }

    @step("Click router link")
    async clickRouterLinkBy(data: {
        name: string
    }){
        await this.routerLink(data.name).click();
    }

    @step("Home page loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }


}