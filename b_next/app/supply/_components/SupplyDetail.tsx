"use client"

import Image from "next/image";
import Link from "next/link";
import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useSupplyDetail } from "@/hooks/useSupply";
import BookmarkButton from "@/app/supply/_components/BookmarkButton";

interface SupplyDetailProps {
    supplyId: number;
}

export default function SupplyDetail({ supplyId }: SupplyDetailProps) {
    const { data: supply, status } = useSupplyDetail(supplyId);

    if (status === "pending") {
        return <Loading />;
    }

    if (status === "error") {
        return <ErrorComponent />;
    }

    return (
        <>
            <Link href="/supply" className="text-sm text-neutral-500">
                ‹ 지원사업 목록
            </Link>

            <div className="mt-6 flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                    <span className="inline-block bg-teal-50 px-2.5 py-1 text-sm font-bold text-teal-700">
                        {supply.category}
                    </span>
                    <h1 className="mt-4 text-3xl leading-snug font-extrabold break-keep">
                        {supply.title}
                    </h1>
                    <p className="mt-3 text-base text-neutral-500">
                        {supply.organization} · 접수 {supply.receiptStart} – {supply.receiptEnd}
                    </p>
                </div>
                <BookmarkButton supplyId={supply.id} bookmarked={supply.bookmarked} />
            </div>

            <a
                href={supply.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 items-center border-[1.5px] border-neutral-900 px-5 text-base font-bold"
            >
                공고 사이트로 이동
                <Image
                    src="/assets/icons/arrow-up-right.svg"
                    alt=""
                    width={14}
                    height={14}
                    unoptimized
                    className="ml-1"
                />
            </a>
        </>
    );
}
