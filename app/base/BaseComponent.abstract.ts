import { PageHolder } from "./PageHolder.abstract";

export abstract class BaseComponent extends PageHolder {

    public abstract toBeLoaded(): Promise<void>;
}