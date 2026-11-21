"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useToggleBookmark } from "@/hooks/useSupply";

interface BookmarkButtonProps {
    supplyId: number;
    bookmarked: boolean;
}

export default function BookmarkButton({ supplyId, bookmarked }: BookmarkButtonProps) {
    const { mutate, isPending } = useToggleBookmark();

    const handleClick = () => {
        mutate({ supplyId, bookmarked }, {
            onError: () => {
                alert("북마크 처리에 실패했어요. 잠시 후 다시 시도해 주세요.");
            },
        });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={isPending}
            aria-pressed={bookmarked}
            aria-label={bookmarked ? "북마크 해제" : "북마크"}
            className={cn(
                "flex size-11 items-center justify-center border-[1.5px] disabled:opacity-60",
                bookmarked ? "border-teal-700 bg-teal-50" : "border-neutral-300",
            )}
        >
            <Image
                src={bookmarked ? "/assets/icons/star-filled.svg" : "/assets/icons/star.svg"}
                alt=""
                width={20}
                height={20}
                unoptimized
            />
        </button>
    );
}
