import { useQuery } from 'react-query';

export type dataType = {
  data: any;
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

// export const getPlayers = async (page: any): Promise<dataType> =>
//   await (
//     await fetch(
//       `https://free-nba.p.rapidapi.com/players?page=${pageNumber}&per_page=6`,
//       options
//     )
//   ).json();
