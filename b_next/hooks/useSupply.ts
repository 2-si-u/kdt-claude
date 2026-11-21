import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    bookmarkSupply,
    getSupplyDetail,
    searchSupply,
    SearchSupplyParams,
    unbookmarkSupply,
} from "@/api/supply/supply.api";

export const useSupplyList = (params: SearchSupplyParams) => {
    return useQuery({
        queryKey: ["supply", "list", params.type, params.keyward],
        queryFn: () => searchSupply(params),
    });
}

export const useSupplyDetail = (supplyId: number) => {
    return useQuery({
        queryKey: ["supply", "detail", supplyId],
        queryFn: () => getSupplyDetail(supplyId),
    });
}

export interface ToggleBookmarkVariables {
    supplyId: number;
    bookmarked: boolean;
}

export const useToggleBookmark = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ supplyId, bookmarked }: ToggleBookmarkVariables) => (
            bookmarked ? unbookmarkSupply(supplyId) : bookmarkSupply(supplyId)
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["supply"] });
        },
    });
}
