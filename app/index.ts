import { HomePage } from "./ui/pages/home/Home.page";
import { LoginModal } from "./ui/modals/login/Login.modal";
import { ComparePage } from "./ui/pages/compare/Compare.page";
import { step } from "../helpers/step";
import { API } from "../app/api/index";
import { MacbookAirPage } from "./ui/pages/macbook/MacbookAir.page";
import { MacPage } from "./ui/pages/macbook/Mac.page";
import { FavoritePage } from "./ui/pages/account/Favorite.page";
import { CartModal } from "./ui/modals/cart/Cart.modal";
import { CartPage } from "./ui/pages/cart/Cart.page";
import { SearchPage } from "./ui/pages/search/Search.page";
import { ProductPage } from "./ui/pages/macbook/Product.page";
import { PageHolder } from "./ui/base/PageHolder.abstract";

export class App extends PageHolder {
    readonly api = new API(this.page.request);
    readonly homePage = new HomePage(this.page);
    readonly loginModal = new LoginModal(this.page);
    readonly cartModal = new CartModal(this.page);
    readonly comparePage = new ComparePage(this.page);
    readonly macbookAirPage = new MacbookAirPage(this.page);
    readonly macPage = new MacPage(this.page);
    readonly favoritePage = new FavoritePage(this.page);
    readonly cartPage = new CartPage(this.page);
    readonly searchPage = new SearchPage(this.page);
    readonly productPage = new ProductPage(this.page);

    //Actions
    @step("Save storage state of user")
    async saveStorageStateTo(value: string){
        await this.page.context().storageState({ path: value });
    }

}