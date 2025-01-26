import { PageHolder } from "./PageHolder.abstract";

export abstract class BaseComponent extends PageHolder {

    abstract toBeVisible(): Promise<void>;
}