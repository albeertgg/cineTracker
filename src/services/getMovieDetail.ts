import type { MovieDetail } from '../config/types';

const { VITE_TMDB_TOKEN: TOKEN, VITE_TMDB_BASE_URL: BASE_URL } = import.meta
  .env;

export async function getMovieDetail(endpoint: string) {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const movie = (await response.json()) as MovieDetail;

    return movie;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return null;
  }
}
