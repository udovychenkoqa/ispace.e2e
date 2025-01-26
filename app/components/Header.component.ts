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
    private favoriteButton = this.page.locator("button.btn.btn-header-favorite");
    private cartButton = this.page.locator("button.btn.btn-header-cart");
    private labelNickname = this.signInButton.locator(".label");
    private searchButton = this.page.locator("button.btn.btn-header-search");


    @step("Header to be loaded")
    async toBeLoaded(): Promise<void> {
        await expect(this.root).toBeVisible();
    }

    //Actions
    @step("Click SignIn button")
    async clickSignInButton(){
        await this.signInButton.click();
    }

    @step("Click Favorite button")
    async clickFavoriteButton(){
        await this.favoriteButton.click();
    }

    @step("Click Cart button")
    async clickCartButton(){
        await this.cartButton.click();
    }

    @step("Click Search button")
    async clickSearchButton(){
        await this.searchButton.click();
    }

    //Assert
    @step("Nickname to have text")
    async expectNicknameToHaveText(value: string){
        await expect(this.labelNickname).toHaveText(value);
    }
}