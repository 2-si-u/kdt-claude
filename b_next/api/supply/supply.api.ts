import { ApiResponseDTO } from "@/types/common/common.type";
import { SupplyDTO, SupplySearchType } from "@/types/supply/supply.type";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface SearchSupplyParams {
    keyward: string;
    type: SupplySearchType;
}

export const searchSupply = async ({ keyward, type }: SearchSupplyParams): Promise<SupplyDTO[]> => {
    const query = new URLSearchParams({ keyward, type });
    const response = await fetch(`${BACKEND_URL}/search?${query.toString()}`);
    if (!response.ok) {
        throw new Error("searchSupply fetching failed");
    }
    const body: ApiResponseDTO<SupplyDTO[]> = await response.json();
    return body.data ?? [];
}

export const getSupplyDetail = async (supplyId: number): Promise<SupplyDTO> => {
    const response = await fetch(`${BACKEND_URL}/supply/${supplyId}`, {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("getSupplyDetail fetching failed");
    }
    const body: ApiResponseDTO<SupplyDTO> = await response.json();
    if (!body.data) {
        throw new Error("getSupplyDetail empty data");
    }
    return body.data;
}

export const bookmarkSupply = async (supplyId: number): Promise<void> => {
    const response = await fetch(`${BACKEND_URL}/supply/${supplyId}`, {
        method: "POST",
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("bookmarkSupply failed");
    }
}

export const unbookmarkSupply = async (supplyId: number): Promise<void> => {
    const response = await fetch(`${BACKEND_URL}/supply/${supplyId}`, {
        method: "DELETE",
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("unbookmarkSupply failed");
    }
}
