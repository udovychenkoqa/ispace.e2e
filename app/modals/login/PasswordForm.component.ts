import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../helpers/step";

export class PasswordForm extends BaseComponent {
    //Locators
    private inputPassword = this.page.locator("input#password");

    //Actions

  @step(`Fill input password fields`)
    async fillPassword(password: string):Promise<void>{
        await this.inputPassword.fill(password);
    }
}
