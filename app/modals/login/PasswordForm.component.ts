import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../helpers/step";
import { expect } from "@playwright/test";

export class PasswordForm extends BaseComponent {
    //Locators
    private inputPassword = this.page.locator("input#password");

    @step(`Input password to be loaded`)
    async toBeLoaded(): Promise<void> {
        await expect(this.inputPassword).toBeVisible();
    }

    //Actions

    @step(`Fill input password fields`)
    async fillPassword(password: string):Promise<void>{
        await this.toBeLoaded();
        await this.inputPassword.fill(password);
    }
}
