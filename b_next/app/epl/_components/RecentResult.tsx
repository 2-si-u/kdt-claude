interface RecentResultProps {
    result: string;
    isLatest: boolean;
}

export default function RecentResult({ result, isLatest }: RecentResultProps) {
    const isWin = result === "승";

    return (
        <span
            className={`inline-flex size-6 items-center justify-center rounded-sm border text-xs font-bold ${
                isWin
                    ? "border-green-500 text-green-600"
                    : "border-blue-500 text-blue-600"
            } ${isLatest ? "border-b-2" : ""}`}
        >
            {result}
        </span>
    );
}
