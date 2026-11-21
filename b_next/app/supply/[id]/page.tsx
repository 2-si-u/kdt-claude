import { notFound } from "next/navigation";
import SupplyDetail from "@/app/supply/_components/SupplyDetail";

export default async function SupplyDetailPage(props: PageProps<"/supply/[id]">) {
    const { id } = await props.params;
    const supplyId = Number(id);

    if (!Number.isInteger(supplyId) || supplyId <= 0) {
        notFound();
    }

    return <SupplyDetail supplyId={supplyId} />;
}
