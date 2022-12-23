import {
  GameType,
  PlayerType,
  StatType,
  TeamType,
} from '../types/Players.types';

// API LOGIC
const options = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

// Players
export const getPlayers = async (pageNumber: number): Promise<PlayerType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=20`,
      options
    )
  ).json();

export const getFilteredPlayers = async (
  searchAllValue: string
): Promise<PlayerType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/players?&per_page=100&search=${searchAllValue}`,
      options
    )
  ).json();

// Teams
export const getTeams = async (): Promise<TeamType> =>
  await (await fetch('https://free-nba.p.rapidapi.com/teams', options)).json();

// Games
export const getGames = async (pageNumber: number): Promise<GameType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/games?page=${pageNumber}per_page=20}`,
      options
    )
  ).json();

// Stats
export const getStats = async (pageNumber: number): Promise<StatType> =>
  await (
    await fetch(
      `https://free-nba.p.rapidapi.com/stats?page=${pageNumber}per_page=20}`,
      options
    )
  ).json();
