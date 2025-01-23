import { BaseComponent } from "../base/BaseComponent.abstract";
import { CartButton } from "./CartButton.component";
import { CompareButton } from "./CompareButton.component";
import { FavoriteButton } from "./FavoriteButton.component";

export class Navigation extends BaseComponent {
  public wishlistButton = new FavoriteButton(this.page);
  public cartButton = new CartButton(this.page);
  public compareButton = new CompareButton(this.page)
}
