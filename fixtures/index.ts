import { test as baseTest, ConsoleMessage } from "@playwright/test";
import { App } from "../app/index";
export const favoriteIds: Array<string> = [];
export const productIds: Array<string> = [];

export const test = baseTest.extend<{ app: App}>({
    app: async ( { page }, use) => {
        const app = new App(page);
        await use(app);
        if (productIds.length > 0) {
            for (const productId of productIds) {
                await app.api.user.deleteProductFromCart({
                    authToken: process.env.CART_TOKEN,
                    cartToken: process.env.AUTH_TOKEN,
                    id: productId
                });
            }
        }
        if (favoriteIds.length > 0) {
            for (const favoriteId of favoriteIds) {
                await app.api.user.deleteFavoriteProduct({
                    authToken: process.env.CART_TOKEN,
                    cartToken: process.env.AUTH_TOKEN,
                    id: favoriteId
                });
            }
        }
    },
    page: async ({ page}, use) => {
        page.on("console", async (msg:ConsoleMessage ) => {
            if(msg.text().includes("the server responded with a status of 500")){
                throw new Error(`on a page ${
                    page.url()} error was throws in a console with a error message: ${msg.text()}`);
            }
        });
        await use(page);
    }
});