import { RequestHolder } from "../base/RequestHolder.abstract";
import { LoginRequest } from "../models/LoginRequest.model";

export class AuthController extends RequestHolder {
    async getTokenFromResponse(data: LoginRequest) {
        const response = await this.request.post(
            "/apr/login",
            {
                data: data
            }
        );
        const authData = response.headers();
        return authData;
    }
}
