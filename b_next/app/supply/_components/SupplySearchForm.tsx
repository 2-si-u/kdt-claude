"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SUPPLY_SEARCH_TYPES, SupplySearchType } from "@/types/supply/supply.type";

interface SupplySearchFormProps {
    keyward: string;
    type: SupplySearchType;
}

interface SupplySearchFormValues {
    type: SupplySearchType;
    keyward: string;
}

const SEARCH_TYPE_LABELS: Record<SupplySearchType, string> = {
    title: "제목",
    content: "내용",
    both: "제목 + 내용",
};

export default function SupplySearchForm({ keyward, type }: SupplySearchFormProps) {
    const router = useRouter();
    const { register, handleSubmit } = useForm<SupplySearchFormValues>({
        defaultValues: { type, keyward },
    });

    const onSubmit = (values: SupplySearchFormValues) => {
        const query = new URLSearchParams({
            type: values.type,
            keyward: values.keyward.trim(),
        });
        router.push(`/supply?${query.toString()}`);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex gap-2 border-b-[1.5px] border-neutral-900 pb-7"
        >
            <div className="relative h-13 w-41 border-[1.5px] border-neutral-300">
                <select
                    {...register("type")}
                    aria-label="검색 범위"
                    className="h-full w-full appearance-none bg-transparent pr-9 pl-4 text-base font-medium outline-none"
                >
                    {SUPPLY_SEARCH_TYPES.map((option) => (
                        <option key={option} value={option}>
                            {SEARCH_TYPE_LABELS[option]}
                        </option>
                    ))}
                </select>
                <Image
                    src="/assets/icons/chevron-down.svg"
                    alt=""
                    width={12}
                    height={12}
                    unoptimized
                    className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2"
                />
            </div>

            <div className="relative h-13 flex-1 border-[1.5px] border-neutral-300">
                <Image
                    src="/assets/icons/search.svg"
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className="pointer-events-none absolute top-1/2 left-4.5 -translate-y-1/2"
                />
                <input
                    {...register("keyward")}
                    type="text"
                    placeholder="제목이나 내용으로 검색"
                    aria-label="검색어"
                    className="h-full w-full pr-4 pl-12 text-lg outline-none placeholder:text-neutral-400"
                />
            </div>

            <button
                type="submit"
                className="h-13 w-17.5 bg-neutral-900 text-base font-bold text-white"
            >
                검색
            </button>
        </form>
    );
}
