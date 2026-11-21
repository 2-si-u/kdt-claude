"use client"

import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useSupplyList } from "@/hooks/useSupply";
import { SupplySearchType } from "@/types/supply/supply.type";
import SupplyItem from "@/app/supply/_components/SupplyItem";

interface SupplyListProps {
    keyward: string;
    type: SupplySearchType;
}

export default function SupplyList({ keyward, type }: SupplyListProps) {
    const { data: supplies, status } = useSupplyList({ keyward, type });

    if (status === "pending") {
        return <Loading />;
    }

    if (status === "error") {
        return <ErrorComponent />;
    }

    return (
        <>
            <div className="flex items-baseline justify-between border-b-[1.5px] border-neutral-900 pb-4">
                <p className="text-2xl font-bold">공고 {supplies.length}건</p>
            </div>

            <ul>
                {supplies.map((supply) => (
                    <SupplyItem key={supply.id} supply={supply} />
                ))}
            </ul>

            <p className="mt-6 text-base text-neutral-400">
                공고 보기를 누르면 해당 지원사업 공고 사이트로 이동해요. 공고 내용은 StartFit에 저장하지 않아요.
            </p>
        </>
    );
}
