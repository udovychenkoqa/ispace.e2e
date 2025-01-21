import { PageHolder } from "./base/PageHolder";
import { HomePage } from "./pages/home/Home.page";
import { LoginModal } from "./modals/login/Login.modal";
import { ComparisonPage } from "./pages/comparison/Comparison.page";

export class App extends PageHolder {
    public homePage = new HomePage(this.page)
    public loginModal = new LoginModal(this.page)
    public comparisonPage = new ComparisonPage(this.page)
}