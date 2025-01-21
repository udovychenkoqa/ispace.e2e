import { test as base } from "@playwright/test";
import { App } from "../app/index";

export const test = base.extend<{ app: App}>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});
