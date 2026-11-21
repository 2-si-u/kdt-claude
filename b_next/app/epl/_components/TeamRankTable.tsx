import Image from "next/image";
import { TeamRankDTO } from "@/types/epl/epl.type";
import RecentResult from "@/app/epl/_components/RecentResult";

interface TeamRankTableProps {
    teams: TeamRankDTO[];
}

export default function TeamRankTable({ teams }: TeamRankTableProps) {
    return (
        <div className="overflow-x-auto rounded-md bg-white shadow-sm">
            <table className="w-full min-w-240 border-collapse text-center text-sm text-neutral-800">
                <thead className="bg-neutral-100 text-neutral-500">
                    <tr className="h-12">
                        <th className="w-16 font-medium">순위</th>
                        <th className="w-40 text-left font-medium">팀명</th>
                        <th className="w-20 font-medium text-blue-600">승률</th>
                        <th className="w-20 font-medium">게임차</th>
                        <th className="w-16 font-medium">경기</th>
                        <th className="w-16 font-medium">승</th>
                        <th className="w-16 font-medium">패</th>
                        <th className="w-16 font-medium">무</th>
                        <th className="w-20 font-medium">연속</th>
                        <th className="w-20 font-medium">타율</th>
                        <th className="w-24 font-medium">평균자책</th>
                        <th className="w-56 font-medium">최근 5경기</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.rank} className="h-14 border-t border-neutral-200">
                            <td className="font-bold">{team.rank}</td>
                            <td className="whitespace-nowrap text-left">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={`/assets/teams/${team.logo}`}
                                        alt={`${team.name} 로고`}
                                        width={36}
                                        height={36}
                                    />
                                    <span className="font-semibold">{team.name}</span>
                                </div>
                            </td>
                            <td className="font-semibold text-blue-600">{team.winRate.toFixed(3)}</td>
                            <td>{team.gamesBehind.toFixed(1)}</td>
                            <td>{team.games}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.draws}</td>
                            <td>{team.streak}</td>
                            <td>{team.batting.toFixed(3)}</td>
                            <td>{team.era.toFixed(2)}</td>
                            <td>
                                <div className="flex justify-center gap-1">
                                    {team.recent.map((result, index) => (
                                        <RecentResult
                                            key={`${team.rank}-${index}`}
                                            result={result}
                                            isLatest={index === team.recent.length - 1}
                                        />
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
