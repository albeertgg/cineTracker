import { Link } from 'react-router';
import type { Movie } from '../config/types';
import Heading from './Heading';
import MovieItem from './MovieItem';
import MovieSkeleton from './MovieSkeleton';
import { twMerge } from 'tailwind-merge';

interface Props {
  movies: Movie[];
  sectionTitle?: string;
  isLoading?: boolean;
  className?: string;
  titleClasses?: string;
}

export default function MovieList(props: Props) {
  const {
    movies,
    sectionTitle,
    className,
    titleClasses,
    isLoading = false,
  } = props;

  const skeletons = Array.from({ length: 12 }, (_, index) => index);

  const classesMerged = twMerge(
    'grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4',
    className
  );

  const titleClassesMerged = twMerge('my-4', titleClasses);

  return (
    <section className="w-full">
      {sectionTitle && (
        <Heading as="h2" className={titleClassesMerged}>
          {sectionTitle}
        </Heading>
      )}

      <div className={classesMerged}>
        {isLoading &&
          skeletons.map((_, index) => <MovieSkeleton key={index} />)}
        {!isLoading &&
          movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              {' '}
              <MovieItem key={movie.id} movie={movie} />
            </Link>
          ))}
      </div>
    </section>
  );
}
