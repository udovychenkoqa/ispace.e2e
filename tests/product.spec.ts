import { MacBookAir, PageSuffix } from "../app/PageSuffix";
import { test } from "../fixtures";
import { productIds, favoriteIds } from "../fixtures";
test.describe("Product functionality", () => {
    test.describe.configure({ mode: "default" });
    test("Wishlist counter updates after adding a product to favorites", {
        tag: ["@favorite", "@ui"] }, async({ app }) => {
        //Actions
        await app.macPage.open();
        await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
        const id:string = await app.macbookAirPage.catalogItem.addProductToFavoriteAt({ number: 1 });
        favoriteIds.push(id);

        //Verify
        await app.macbookAirPage.header.navigation.wishlistButton.expectCounterToHaveText("1");
    });

    test("Favorite page updates after adding a product to favorites", {
        tag: ["@favorite", "@ui"] }, async({ app }) => {
        //Actions
        await app.macPage.open();
        await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
        const id:string = await app.macbookAirPage.catalogItem.addProductToFavoriteAt({ number: 1 });
        favoriteIds.push(id);
        await app.macbookAirPage.header.clickFavoriteButton();

        //Verify
        await app.favoritePage.expectCatalogListToHaveCount(1);
    });


    test("Cart page updates after adding a product to cart", {
        tag: ["@cart", "@ui"] }, async({ app }) => {
        //Actions
        await app.macPage.open();
        await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
        const id:string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
        productIds.push(id);
        await app.cartPage.open();

        //Verify
        await app.cartPage.expectProductListToHaveCount(1);
    });

    test("Price updates after increasing product quantity", {
        tag: ["@cart", "@ui"]
    }, async ({ app }) => {
        // Actions
        await app.macPage.open();
        await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
        const productId: string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
        productIds.push(productId);
        await app.cartPage.open();
        const initialPrice = await app.cartPage.productItem.getPriceProduct();
        await app.cartPage.productItem.clickPlusButton();
        await app.cartPage.productItem.stepToBeChanged(2);
        const updatedPrice = await app.cartPage.productItem.getPriceProduct();

        // Verify
        await app.cartPage.productItem.expectPriceToIncrease({
            oldPrice: initialPrice,
            newPrice: updatedPrice
        });
    });

    test("Price changes after clicking a minus button", {
        tag: ["@cart", "@ui"] }, async({ app }) => {
        //Actions
        await app.macPage.open();
        await app.macPage.categoryItem.clickItemBy({ name: "macbook-air" });
        const productId: string = await app.macbookAirPage.catalogItem.addProductToCartAt({ number: 1 });
        productIds.push(productId);
        await app.cartPage.open();
        const initialPrice = await app.cartPage.productItem.getPriceProduct();
        await app.cartPage.productItem.clickPlusButton();
        await app.cartPage.productItem.stepToBeChanged(2);
        const updatedPrice = await app.cartPage.productItem.getPriceProduct();

        //Verify
        await app.cartPage.productItem.expectPriceToDecrease({
            newPrice: updatedPrice,
            oldPrice: initialPrice
        });
        await app.cartPage.productItem.clickMinusButton();
        await app.cartPage.productItem.stepToBeChanged(1);
        await app.cartPage.productItem.expectPriceToIncrease({
            oldPrice: initialPrice,
            newPrice: updatedPrice
        });
    });
});

test.describe("Product details functionality", () => {
    test.describe.configure({ mode: "default" });
    test(`Product is added to the cart and the cart button updates text`, {
        tag: ["@productDetail", "@ui"]}, async({ app }) => {
        //Actions
        await app.productPage.open(`${MacBookAir.M1_256GB_13_8GB_SERYY_KOSMOS}-mgn63uua`);
        const id:string = await app.productPage.addProductToCartAt();
        productIds.push(id);
        await app.cartModal.toBeLoaded();
        await app.cartModal.header.clickCloseButton();

        //Verify
        await app.productPage.expectCartButtonToHaveText("Перейти до кошику");

    });

    test(`The "Cart" button adds the product to the cart and redirect to the cart page`, {
        tag: ["@productDetail", "@ui"]}, async({ app }) => {
        //Actions
        await app.productPage.open(`${MacBookAir.M1_256GB_13_8GB_SERYY_KOSMOS}-mgn63uua`);
        const id:string = await app.productPage.addProductToCartAt();
        productIds.push(id);
        await app.cartModal.toBeLoaded();
        await app.cartModal.header.clickCloseButton();
        await app.productPage.clickGoToCartButton();

        //Verify
        await app.cartPage.expectTitleCurrentPage("Корзина");
        await app.cartPage.expectUrlCurrentPage("/ua" + PageSuffix.CART_PAGE);
    });
});