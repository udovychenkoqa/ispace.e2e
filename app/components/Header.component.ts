import { BaseComponent } from "../base/BaseComponent.abstract";
import { SearchForm } from "./SearchForm.component";
import { MatMenu } from "./MatMenu.component";
import { step } from "../../helpers/step";
import { expect } from "@playwright/test";
import { Navigation } from "./Navigation.component";
 
export class Header extends BaseComponent{
    public search = new SearchForm(this.page);
    public matMenu = new MatMenu(this.page);
    public navigation = new Navigation(this.page);

    //Locators
    private root = this.page.locator("header");
    private signInButton = this.root.locator("button.btn.btn-sign-in");
    private labelNickname = this.signInButton.locator(".label");

    //Actions
    @step("Click SignIn button")
    async clickSignInButton(){
        await this.signInButton.click();
    }

    //Assert
    @step("Nickname to have text")
    async expectNicknameToHaveText(value: string){
        await expect(this.labelNickname).toHaveText(value);
    }
}