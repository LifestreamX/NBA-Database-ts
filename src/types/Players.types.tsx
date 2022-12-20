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
  data: PlayerTypeData[];
  meta: PlayerTypeMeta;
}
