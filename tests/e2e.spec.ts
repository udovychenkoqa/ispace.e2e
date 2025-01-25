import { test } from "../fixtures";
import { productIds } from "../fixtures";

test("Wishlist counter updates after adding a product to favorites", async({ app }) => {
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToFavoriteAt({ number: 1 });
    productIds.push(id);

    await app.macbookAirPage.header.navigation.wishlistButton.expectCounterToHaveText("1");
});