import { AuthController } from "./controllers/Auth.controller";
import { RequestHolder } from "./base/RequestHolder.abstract";
import { UserController } from "./controllers/User.controller";

export class API extends RequestHolder {
    readonly auth = new AuthController(this.request);
    readonly user = new UserController(this.request);
}
