import { BaseComponent } from "../base/BaseComponent.abstract";
import { CartButton } from "./CartButton.component";
import { CompareButton } from "./CompareButton.component";
import { FavoriteButton } from "./FavoriteButton.component";

export class Navigation extends BaseComponent {
    readonly wishlistButton = new FavoriteButton(this.page);
    readonly cartButton = new CartButton(this.page);
    readonly compareButton = new CompareButton(this.page);

    async toBeLoaded(): Promise<void> {}
}
