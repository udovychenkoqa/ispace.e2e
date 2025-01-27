import { test } from "../fixtures";
import searchData from "../data/data-provider/searchData.json";

for(const { testID, criteria } of searchData.search){
    test(`${testID} Search results match the search criteria: ${criteria}`, {
        tag: ["@search", "@ui"]}, async({ app }) => {
    //Actions
        await app.homePage.open();
        await app.homePage.header.clickSearchButton();
        await app.homePage.searchHeader.searchForm.fillInput(criteria);
        await app.homePage.searchHeader.searchForm.clickSearchIcon();

        //Verify
        await app.searchPage.expectSearchItemsToContain(new RegExp(criteria, "i"));
    });
}