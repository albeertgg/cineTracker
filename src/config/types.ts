export interface Movie {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  key: string;
  type: string;
}

export interface MovieDetail extends Movie {
  genres: Genre[];
  videos: {
    results: Video[];
  };
}

export interface TMDBMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface User {
  name: string;
  email: string;
}
