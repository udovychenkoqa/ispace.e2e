export interface SearchResponse {
    category: Array<{
        _index: string;
        _type: string;
        _id: string;
        _score: number;
        _source: {
            name: string;
            enabled: number;
            url: string;
            slug: string;
            title: string;
            og_content: string;
            image: string;
            content: string;
        };
    }>;
}