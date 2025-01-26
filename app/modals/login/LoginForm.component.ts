import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../helpers/step";
import { expect } from "@playwright/test";
export class LoginForm extends BaseComponent {
    //Locators
    private inputLogin = this.page.locator('input[formcontrolname="login"]');


    @step(`Input login to be loaded`)
    async toBeVisible(): Promise<void> {
        await expect(this.inputLogin).toBeVisible();
        await expect(this.inputLogin).not.toHaveJSProperty("naturalWidth", 0);
    }

    //Actions
    @step(`Fill input email field`)
    async fillEmail(email: string):Promise<void>{
        await this.toBeVisible();
        await this.inputLogin.fill(email);
    }

    @step(`Clear input login`)
    async clearInputLogin():Promise<void>{
        await this.inputLogin.clear();
    }
}