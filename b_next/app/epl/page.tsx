import eplResult from "@/assets/epl_result.json";
import { EplResultDTO } from "@/types/epl/epl.type";
import TeamRankTable from "@/app/epl/_components/TeamRankTable";

const result: EplResultDTO = eplResult;

export default function EplPage() {
    return (
        <main className="mx-auto w-full max-w-260 px-4 py-16">
            <h1 className="mb-6 text-2xl font-extrabold tracking-tight">팀 순위</h1>
            <TeamRankTable teams={result.teams} />
        </main>
    );
}
