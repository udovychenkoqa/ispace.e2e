import { AuthController } from "./controllers/Auth.controller";
import { RequestHolder } from "./base/RequestHolder.abstract";

export class API extends RequestHolder {
    readonly auth = new AuthController(this.request);
}