export interface Team {
  id: string;
  name: string;
  logo?: string;
  country?: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  team1Score?: number;
  team2Score?: number;
  status: 'upcoming' | 'live' | 'finished';
  startTime: string;
  event: string;
  format: string;
  bestOf?: number;
  streamUrl?: string;
}

export interface MatchesResponse {
  matches: Match[];
}
