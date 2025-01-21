import { PageHolder } from "./PageHolder";

export abstract class BasePage extends PageHolder {

    public abstract open(): Promise<void>;
}