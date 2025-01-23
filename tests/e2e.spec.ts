import { test } from "../fixtures"

test.skip("Open home", async({ app, page }) => {
    await app.comparePage.open()
    await page.waitForTimeout(2000)

})