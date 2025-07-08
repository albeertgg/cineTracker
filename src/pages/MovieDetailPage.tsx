import Button from '../components/Button';
import Heading from '../components/Heading';

import { MdBookmarkAdd } from 'react-icons/md';
import GenreList from '../components/GenreList';
import { FaImdb } from 'react-icons/fa';
import TrailerVideo from '../components/TrailerVideo';
import { ImEyePlus } from 'react-icons/im';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getMovieDetail } from '../services/getMovieDetail';
import type { MovieDetail } from '../config/types';
import { getVoteCount } from '../helpers/getVoteCount';

export default function MovieDetailPage() {
  const [movieData, setMovieData] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  const movieYoutubeTrailerKey = movieData?.videos.results.find(
    (video) => video.type === 'Trailer'
  )?.key;

  console.log(movieData);

  useEffect(() => {
    if (!movieId) return;

    getMovieDetail(movieId + '?append_to_response=videos')
      .then((movie) => setMovieData(movie))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full">
        <Heading className="text-left">{movieData?.title}</Heading>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="bg-green-200"
            icon={<ImEyePlus />}
          >
            Watched
          </Button>
          <Button variant="secondary" icon={<MdBookmarkAdd />}>
            Add to watchlist
          </Button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] 
       w-full my-8 gap-32"
      >
        <div className="flex gap-4">
          {movieData?.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
              alt={'Poster of ' + movieData.original_title}
              className="w-64 rounded-xl"
            />
          ) : (
            <div className="min-w-64 rounded-xl flex items-center justify-center border-2">
              <span className="text-2xl font-bold">No Poster Available</span>
            </div>
          )}
          <div className="flex flex-col gap-4 py-4">
            <GenreList
              genres={movieData?.genres.map((genre) => genre.name) || []}
            />
            <p className="font-semibold">{movieData?.overview}</p>
            <Heading as="h2" className="text-lg mt-auto">
              IMDB Rating
            </Heading>
            <div className="flex gap-4">
              <span className="">
                <FaImdb className="inline-block mr-2" />
                {movieData?.vote_average?.toFixed(1)}
                <span className="text-xs text-gray-400">/10</span>
              </span>
              <span>{getVoteCount(movieData?.vote_count)} Reviews</span>
            </div>
          </div>
        </div>

        <div>
          <TrailerVideo videoId={movieYoutubeTrailerKey} />
        </div>
      </div>
    </div>
  );
}
