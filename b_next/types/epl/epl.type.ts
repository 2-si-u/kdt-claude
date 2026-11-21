export interface TeamRankDTO {
    rank: number;
    name: string;
    logo: string;
    winRate: number;
    gamesBehind: number;
    games: number;
    wins: number;
    losses: number;
    draws: number;
    streak: string;
    batting: number;
    era: number;
    recent: string[];
}

export interface EplResultDTO {
    season: number;
    source: string;
    teams: TeamRankDTO[];
}
