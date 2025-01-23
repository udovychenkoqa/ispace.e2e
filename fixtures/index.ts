import { test as baseTest } from "@playwright/test"
import { App } from "../app/index"

export const test = baseTest.extend<{ app: App }>({
  app: async ( { page }, use) => {
    const app = new App(page)
    await use(app)
  }
})