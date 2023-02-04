import { fetchMovieReviews } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Text } from './Reviews.styled';
import { CastList } from 'components/Cast/Cast.styled';
import { TextMovie } from 'pages/MovieDetailsPage/MovieDetails.styled';

const ReviewsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie !== null && movie.results.length > 0 ? (
        <>
          <CastList>
            {movie.results.map(({ id, author, content }) => (
              <li key={id}>
                <Text>Author: {author}</Text>
                <TextMovie>{content}</TextMovie>
              </li>
            ))}
          </CastList>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Text>We don`t have any reviews for this movie.</Text>
      )}
    </>
  );
};

export default ReviewsPage;
