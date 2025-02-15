import { test } from "../../fixtures";

test(`Response match the search criteria`, {
    tag: ["@search", "@api"]}, async({ app }) => {
    const value: string = "iPhone";
    //Actions
    const actualResponse = await app.api.search.getSearchRequest({query: value });

    //Verify
    await app.api.search.expectResponseCategoryNameToMatch({
        response: actualResponse, searchCriteria: new RegExp(value, "i" )});
});
