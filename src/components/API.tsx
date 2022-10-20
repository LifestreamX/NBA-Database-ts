import { useQuery } from 'react-query';

export type dataType = {
  data: any;
};


export type PlayerType = {
  first_name: string;
  height_feet: number;
  height_inches: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds: number;
};

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb7dfb7b40msh9a3b45b655e8effp17b293jsna42fa502c4b0',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };

  

  export const getPlayers = async (): Promise<dataType> =>
    await (
      await fetch(
        'https://free-nba.p.rapidapi.com/players?page=0&per_page=25',
        options
      )
    ).json();





