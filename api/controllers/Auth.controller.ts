import { RequestHolder } from "../base/RequestHolder.abstract";
import { LoginRequest } from "../models/LoginRequest.model";

export class AuthController extends RequestHolder{

    async getTokenFromResponse(data: LoginRequest) {
        const response = await this.request.post(
          "https://ispace.ua/ua/api/apr/login",
          {
            headers: {
              "access-control-allow-headers": "Content-Type, Cache-Control, Accept, Authorization, X-Requested-With, CartToken, carttoken"
            },
            data:  data 
          }
        );
        const authData =  response.headers(); 
        console.log(authData)
        return authData
      }
}