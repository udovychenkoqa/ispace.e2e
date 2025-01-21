import { BaseComponent } from "../base/BaseComponent";
import { SearchForm } from "./SearchForm.component"
import { Menu } from "./Menu.component"
import { LangMenu } from "./LangMenu.component";
import { CompareButton } from "./CompareButton.component";
import { WishlistButton } from "./WishlistButton.component";
import { CartButton } from "./CartButton.component";

export class Header extends BaseComponent{
    public search = new SearchForm(this.page)
    public menu = new Menu(this.page)
    public langMenu = new LangMenu(this.page)
    public compareButton = new CompareButton(this.page)
    public wishlistButton  = new WishlistButton(this.page)
    public cartButton = new CartButton(this.page)

}