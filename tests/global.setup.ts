import { test as setup } from "../fixtures/index";
import { getAuthTokenFromAuthFile, getCartTokenFromAuthFile } from "../helpers/authHelper";
setup.use({viewport: { width: 1440, height: 1200 }});


setup("Login to site as user", async ({ app }) => {
    //Action
    await app.homePage.open();
    await app.homePage.header.clickSignInButton();
    await app.loginModal.loginForm.clearInputLogin();
    await app.loginModal.loginForm.fillEmail("autotesting1203@gmail.com");
    await app.loginModal.clickSubmitButton();
    await app.loginModal.passwordForm.fillPassword("Qwerty!1");
    await app.loginModal.clickLoginButton();

    //Assert
    await app.homePage.header.expectNicknameToHaveText("Anton");

    //Save storage
    await app.saveStorageStateTo("./data/auth/authFile.json");
    process.env.CART_TOKEN = getCartTokenFromAuthFile();
    process.env.AUTH_TOKEN = getAuthTokenFromAuthFile();

});
