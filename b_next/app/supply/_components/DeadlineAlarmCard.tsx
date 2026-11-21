export default function DeadlineAlarmCard() {
    return (
        <div className="bg-teal-50 p-6">
            <h2 className="text-xl font-bold">마감 알림</h2>
            <p className="mt-3 text-base text-neutral-700 break-keep">
                북마크한 공고의 마감 3일 전에 이메일로 알려드려요.
            </p>
            <button
                type="button"
                className="mt-4 h-11 w-full bg-neutral-900 text-base font-bold text-white"
            >
                알림 받기
            </button>
        </div>
    );
}
