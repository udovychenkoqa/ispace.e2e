import { expect } from "@playwright/test";
import { RequestHolder } from "../base/RequestHolder.abstract";
import type { SearchResponse } from "../models/SearchResponse.model";
import { step } from "../../../helpers/step";


export class SearchController extends RequestHolder {

    @step("Send GET request for search query")
    async getSearchRequest(data:{ query: string }) {
        const response = await this.request.get(
            `/api/v1/search?site=19&query=${data.query}`
        );
        const parseBody = response.json();
        return parseBody as Promise<SearchResponse>;
    }

    //Verify
    async expectResponseCategoryNameToMatch(data: { response: SearchResponse, searchCriteria: RegExp}){
        const names = data.response.category.map(item => item._source.name);
        for(const name of names){
            expect(name).toMatch(data.searchCriteria);
        }
    }
}