import { fetchMovieReviews } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Author } from './Reviews.styled';

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
          <ul>
            {movie.results.map(({ id, author, content }) => (
              <li key={id}>
                <Author>Author: {author}</Author>
                <p>{content}</p>
              </li>
            ))}
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};

export default ReviewsPage;
