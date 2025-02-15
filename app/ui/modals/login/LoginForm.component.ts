import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../../helpers/step";
import { expect } from "@playwright/test";
export class LoginForm extends BaseComponent {
    //Locators
    private inputLogin = this.page.locator('input[formcontrolname="login"]');


    @step(`Input login to be loaded`)
    async toBeLoaded(): Promise<void> {
        await expect(this.inputLogin).toBeVisible();
        await expect(this.inputLogin).not.toHaveJSProperty("naturalWidth", 0);
    }

    //Actions
    @step(`Fill input email field`)
    async fillEmail(email: string):Promise<void>{
        await this.toBeLoaded();
        await this.inputLogin.pressSequentially(email, { delay: 100 });
    }

    @step(`Clear input login`)
    async clearInputLogin():Promise<void>{
        await this.toBeLoaded();
        await this.inputLogin.dblclick();
        await this.inputLogin.press("Delete");
        await this.inputLogin.dblclick();
        await this.inputLogin.press("Delete");
    }
}