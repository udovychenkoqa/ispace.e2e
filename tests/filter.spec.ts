import { test } from "../fixtures";
import filterData from "../data/data-provider/filterData.json";

for(const { testID, value, category } of filterData.filters){
    test(`${testID} Results match the filter: ${category} - ${value}`, {
        tag: ["@filter", "@ui"]}, async({ app }) => {
    //Actions
        await app.macbookAirPage.open();
        await app.macbookAirPage.filter.selectFilterBy({name: value});
        await app.macbookAirPage.refresh();

        //Verify
        await app.macbookAirPage.catalogItem.expectItemsNameToContain(new RegExp(value));
    });
}

test(`Results are sorted by price from most expensive to cheapest`, {
    tag: ["@filter", "@ui"]}, async({ app }) => {
    //Actions
    await app.macbookAirPage.open();
    await app.macbookAirPage.catalogHeader.clickSortByPrice();
    const itemPrices:Array<number> = await app.macbookAirPage.catalogItem.getPriceAllItems();

    //Verify
    await app.macbookAirPage.catalogItem.expectItemsSortedDescendingByPrice(itemPrices);
});