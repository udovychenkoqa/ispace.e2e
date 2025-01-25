import { test as baseTest } from "@playwright/test";
import { App } from "../app/index";
export const productIds: Array<string> = [];

export const test = baseTest.extend<{ app: App }>({
    app: async ( { page }, use) => {
        const app = new App(page);
        await use(app);
        if (productIds.length > 0) {
            for (const productId of productIds) {
                await app.api.user.deleteFavoriteProduct({
                    authToken: process.env.CART_TOKEN,
                    cartToken: process.env.AUTH_TOKEN,
                    id: productId
                });
            }
        }
    }
});