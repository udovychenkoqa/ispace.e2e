import { RequestHolder } from "../base/RequestHolder.abstract";
import { expect } from "@playwright/test";

export class UserController extends RequestHolder {

    async deleteFavoriteProduct(data: {
        authToken: string | undefined,
        cartToken: string | undefined,
        id: string | undefined
    }): Promise<void>{
        const response = await this.request.delete(`https://ispace.ua/ua/api/apr/favorites?product_id=${data.id}`, {
            headers: {
                authorization: `Bearer ${data.authToken}`,
                carttoken: data.cartToken || ""
            }
        });
        expect(response.ok()).toBeTruthy();
    }

    async deleteProductFromCart(data: {
        authToken: string | undefined,
        cartToken: string | undefined,
        id: string | undefined
    }): Promise<void>{
        const response = await this.request.delete(`https://ispace.ua/ua/api/cart/${data.id}`, {
            headers: {
                authorization: `Bearer ${data.authToken}`,
                carttoken: data.cartToken || ""
            }
        });
        expect(response.ok()).toBeTruthy();
    }
}
