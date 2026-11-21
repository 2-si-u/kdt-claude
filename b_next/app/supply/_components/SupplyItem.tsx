import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SupplyDTO } from "@/types/supply/supply.type";
import BookmarkButton from "@/app/supply/_components/BookmarkButton";

interface SupplyItemProps {
    supply: SupplyDTO;
}

const URGENT_DDAY_LIMIT = 2;

export default function SupplyItem({ supply }: SupplyItemProps) {
    const isUrgent = supply.dday <= URGENT_DDAY_LIMIT;

    return (
        <li className="flex items-center gap-4 border-b border-neutral-200 py-7">
            <div
                className={cn(
                    "w-24 shrink-0 self-start text-3xl font-extrabold tracking-tight",
                    isUrgent && "text-red-500",
                )}
            >
                D-{supply.dday}
            </div>

            <div className="min-w-0 flex-1 pr-6">
                <span className="inline-block bg-teal-50 px-2.5 py-1 text-sm font-bold text-teal-700">
                    {supply.category}
                </span>
                <h3 className="mt-3 text-xl leading-snug font-bold break-keep">
                    <Link href={`/supply/${supply.id}`} className="hover:underline">
                        {supply.title}
                    </Link>
                </h3>
                <p className="mt-2.5 text-base text-neutral-500">
                    {supply.organization} · 접수 {supply.receiptStart} – {supply.receiptEnd}
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
                <BookmarkButton supplyId={supply.id} bookmarked={supply.bookmarked} />
                <a
                    href={supply.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center border-[1.5px] border-neutral-900 px-4 text-base font-bold whitespace-nowrap"
                >
                    공고 보기
                    <Image
                        src="/assets/icons/arrow-up-right.svg"
                        alt=""
                        width={14}
                        height={14}
                        unoptimized
                        className="ml-1"
                    />
                </a>
            </div>
        </li>
    );
}
