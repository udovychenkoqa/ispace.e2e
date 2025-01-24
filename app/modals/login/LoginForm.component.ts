import { BaseComponent } from "../../base/BaseComponent.abstract";
import { step } from "../../../helpers/step";
export class LoginForm extends BaseComponent {
    //Locators
    private inputLogin = this.page.locator('input[formcontrolname="login"]');


      @step(`Fill input email field`)
    async fillEmail(email: string):Promise<void>{
        await this.inputLogin.fill(email);
    }

      @step(`Clear input login`)
      async clearInputLogin():Promise<void>{
          await this.inputLogin.clear();
      }
}