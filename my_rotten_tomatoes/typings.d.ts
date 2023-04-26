export interface Genre {
    id: number
    name: string
  }
  export interface Movie {
    title: string;
    backdrop_path: string;
    media_type?: string;
    release_date?: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    reviews?: Review[];
  }
  
  export interface Review {
    author: string;
    content: string;
    id: string;
  }

  export interface TVShow {
    id: number;
    name: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
    genres: { id: number; name: string }[];
    created_by: { id: number; name: string; profile_path: string }[];
    episode_run_time: number[];
    number_of_seasons: number;
    season: {
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
    }[];
    status: string;
    type: string;
    vote_count: number;
  }
  

  
  export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }

  