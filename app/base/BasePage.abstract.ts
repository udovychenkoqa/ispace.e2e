import { expect, Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent.abstract";
import { step } from "../../helpers/step";

export abstract class BasePage extends BaseComponent {

    //Actions
    public abstract open(path?: string): Promise<void>;

    @step("Refresh current page")
    public async refresh(){
        await this.page.reload();
    }
    @step("Navigate to previous page")
    async navigateBack(): Promise<void>{
        await this.page.goBack();
    }

    //Verify
    @step("Expect current page to have title")
    public async expectTitle(title:string): Promise<void>{
        await expect(this.page).toHaveTitle(title);
    }

    @step("Page to have url")
    async expectUrl(page: Page, url: string): Promise<void>{
        await expect(page).toHaveURL(url);
    }

}