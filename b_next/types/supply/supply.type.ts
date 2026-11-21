export type SupplySearchType = "title" | "content" | "both";

export const SUPPLY_SEARCH_TYPES: SupplySearchType[] = ["title", "content", "both"];

export interface SupplyDTO {
    id: number;
    category: string;
    title: string;
    organization: string;
    receiptStart: string;
    receiptEnd: string;
    dday: number;
    url: string;
    bookmarked: boolean;
}
