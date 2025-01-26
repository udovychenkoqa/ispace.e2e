import { expect } from "@playwright/test";
import { BaseComponent } from "./BaseComponent.abstract";
import { step } from "../../helpers/step";

export abstract class BasePage extends BaseComponent {

    //Actions
    public abstract open(): Promise<void>;

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

}