import MovieList from '../components/MovieList';
import MovieListScroll from '../components/MovieListScroll';
import { useMovies } from '../hooks/useMovies';
import SearchBar from '../components/SearchBar';

import React, { useState } from 'react';

export default function HomePage() {
  // const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  // const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  // const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   getMovies('popular').then((movies) => setPopularMovies(movies));
  //   getMovies('upcoming').then((movies) => setUpcomingMovies(movies));
  //   getMovies('top_rated?language=es-ES').then((movies) =>
  //     setTopMovies(movies)
  //   );
  // }, []);

  const { movies: popularMovies, isLoading: areLoadingPopularMovies } =
    useMovies('popular');
  const { movies: upcomingMovies, isLoading: areLoadingUpcomingMovies } =
    useMovies('upcoming');
  const { movies: topMovies, isLoading: areLoadingTopMovies } = useMovies(
    'top_rated?language=es-ES'
  );

  return (
    <>
    <SearchBar value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search a movie or a series" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12"></section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <MovieListScroll
          sectionTitle="Popular movies"
          movies={popularMovies}
          isLoading={areLoadingPopularMovies}
        />
        <MovieListScroll
          sectionTitle="Upcoming movies"
          movies={upcomingMovies}
          isLoading={areLoadingUpcomingMovies}
        />
      </section>
      <MovieList
        sectionTitle="Top movies"
        movies={topMovies}
        isLoading={areLoadingTopMovies}
      />
    </>
  );
}
