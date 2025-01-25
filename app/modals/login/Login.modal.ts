import { BaseComponent } from "../../base/BaseComponent.abstract";
import { Header } from "../Header.component";
import { PasswordForm } from "./PasswordForm.component";
import { LoginForm } from "./LoginForm.component";
import { step } from "../../../helpers/step";
export class LoginModal extends BaseComponent {
    public header = new Header(this.page);
    public passwordForm = new PasswordForm(this.page);
    public loginForm = new LoginForm(this.page);

    //locators
    private root = this.page.locator(".auth-modal-content");
    private submitButton = this.root.locator("button", { hasText: /Продовжити/});
    private loginButton = this.root.locator("button", { hasText: /Увійти/});


    //Actions

    @step("Click Submit Button")
    async clickSubmitButton (){
        await this.submitButton.click();
    }

    @step("Click Login Button")
    async clickLoginButton(){
        await this.loginButton.click();
    }

}