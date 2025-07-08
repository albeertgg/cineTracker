import Heading from '../components/Heading';
import MovieList from '../components/MovieList';

export default function MyMoviesPage() {
  return (
    <div className="grid">
      <Heading as="h1">Mis películas</Heading>

      <MovieList
        sectionTitle="Watchlist Movies"
        movies={[]}
        className="w-full"
        titleClasses="mt-8"
        isLoading={true}
      />

      <MovieList
        sectionTitle="Watched Movies"
        movies={[]}
        className="w-full"
        titleClasses="mt-8"
        isLoading={true}
      />
    </div>
  );
}
