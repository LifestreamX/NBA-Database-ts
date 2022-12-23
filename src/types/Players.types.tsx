// TYPES SECTION

// Player Types
export interface PlayerTypeData {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds: number;
  team: any;
}

export interface PlayerTypeMeta {
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface PlayerType {
  data: PlayerTypeData[];
  meta: PlayerTypeMeta;
}

// Team Types
export interface TeamTypeData {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
}

export interface TeamTypeMeta {
  current_page: number;
  next_page: null;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface TeamType {
  data: TeamTypeData[];
  meta: TeamTypeMeta;
}

// Game Types
export interface HomeAndAwayTeamType {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  id: number;
  name: string;
}

export interface GameTypeData {
  date: string;
  home_team: HomeAndAwayTeamType;
  home_team_score: number;
  id: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: HomeAndAwayTeamType;
  visitor_team_score: number;
}

export interface GameTypeMeta {
  current_page: number;
  next_page: null | number;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface GameType {
  data: GameTypeData[];
  meta: GameTypeMeta;
}

// Stat Types
export interface GameStatType {
  date: string;
  home_team_id: number;
  home_team_score: number;
  id: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team_id: number;
  visitor_team_score: number;
}

export interface PlayerStatType {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  team_id: number;
  weight_pounds: number;
}

export interface TeamType {
  abbreviation: string;
}

export interface StatTypeData {
  ast: number;
  blk: number;
  dreb: number;
  fg3_pct: number;
  fg3a: number;
  fg3m: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  reb: number;
  ft_pct: number;
  fta: number;
  ftm: number;
  pts: number;
  id: number;
  min: string;
  game: GameStatType;
  player: PlayerStatType;
  team: TeamType;
}

export interface StatTypeMeta {
  current_page: number;
  next_page: null;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface StatType {
  data: StatTypeData[];
  meta: StatTypeMeta;
}
