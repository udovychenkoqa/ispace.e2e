import { Locator } from "@playwright/test";
import { PageHolder } from "./PageHolder.abstract";

export abstract class BaseComponent extends PageHolder {

    protected abstract toBeLoaded(): Promise<void>;

    protected async getResponseAfterClick(data:{ containUrl: string, element: Locator}){
        const responsePromise = this.page.waitForResponse((response) =>
            response.url().includes(data.containUrl)
        );
        await data.element.click();
        const response = await responsePromise;
        const parseBody = await response.json();
        return parseBody;
    }
}