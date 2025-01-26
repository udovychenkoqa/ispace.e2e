import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../helpers/step";
import { expect } from "@playwright/test";

export class PasswordForm extends BaseComponent {
    //Locators
    private inputPassword = this.page.locator("input#password");

    @step(`Input password to be loaded`)
    async toBeVisible(): Promise<void> {
        await expect(this.inputPassword).toBeVisible();
        await expect(this.inputPassword).not.toHaveJSProperty("naturalWidth", 0);
    }

    //Actions

    @step(`Fill input password fields`)
    async fillPassword(password: string):Promise<void>{
        await this.toBeVisible();
        await this.inputPassword.fill(password);
    }
}
