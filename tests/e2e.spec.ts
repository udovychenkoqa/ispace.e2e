import { test } from "../fixtures";
import { productIds } from "../fixtures";

test("Wishlist counter updates after adding a product to favorites", async({ app }) => {
    //Actions
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToFavoriteAt({ number: 1 });
    productIds.push(id);

    //Verify
    await app.macbookAirPage.header.navigation.wishlistButton.expectCounterToHaveText("1");
});

test("Favorite page updates after adding a product to favorites", async({ app }) => {
    //Actions
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToFavoriteAt({ number: 1 });
    productIds.push(id);
    await app.macbookAirPage.header.clickFavoriteButton();

    //Verify
    await app.favoritePage.expectCatalogListToHaveCount(1);
});

test("Cart page updates after adding a product to cart", async({ app }) => {
    //Actions
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
    productIds.push(id);
    await app.cartPage.open();

    //Verify
    await app.cartPage.expectProductListToHaveCount(1);
});

test.only("Price changes after clicking a plus button", async({ app }) => {
    //Actions
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
    productIds.push(id);
    await app.cartPage.open();
    await app.cartPage.productItem.clickPlusButton();

    //Verify
    await app.cartPage.productItem.expectPriceToBeChanged("78 998 грн");
});

test("Price changes after clicking a minus button", async({ app }) => {
    //Actions
    await app.macPage.open();
    await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
    const id:string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
    productIds.push(id);
    await app.cartPage.open();
    await app.cartPage.productItem.clickPlusButton();

    //Verify
    await app.cartPage.productItem.expectPriceToBeChanged("78 998 грн");
    await app.cartPage.productItem.clickMinusButton();
    await app.cartPage.productItem.expectPriceToBeChanged("39 499 грн");
});