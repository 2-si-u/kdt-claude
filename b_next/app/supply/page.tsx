import DeadlineAlarmCard from "@/app/supply/_components/DeadlineAlarmCard";
import SupplyList from "@/app/supply/_components/SupplyList";
import SupplySearchForm from "@/app/supply/_components/SupplySearchForm";
import { SUPPLY_SEARCH_TYPES, SupplySearchType } from "@/types/supply/supply.type";

const readParam = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) {
        return value[0] ?? "";
    }
    return value ?? "";
}

const readSearchType = (value: string): SupplySearchType => {
    const found = SUPPLY_SEARCH_TYPES.find((type) => type === value);
    return found ?? "both";
}

export default async function SupplyPage(props: PageProps<"/supply">) {
    const searchParams = await props.searchParams;
    const keyward = readParam(searchParams.keyward).trim();
    const type = readSearchType(readParam(searchParams.type));

    return (
        <>
            <p className="text-sm text-neutral-500">홈 <span className="mx-1">›</span> 지원사업</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight">지원사업</h1>

            <SupplySearchForm key={`${type}-${keyward}`} keyward={keyward} type={type} />

            <div className="mt-10 flex gap-30">
                <aside className="w-70 shrink-0">
                    <DeadlineAlarmCard />
                </aside>
                <section className="min-w-0 flex-1">
                    <SupplyList keyward={keyward} type={type} />
                </section>
            </div>
        </>
    );
}
