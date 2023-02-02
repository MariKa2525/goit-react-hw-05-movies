import { Outlet, useLocation } from 'react-router-dom';
import { useFetchMovie } from '../../hooks/useFetchMovie/useFetchMovie';
import { useNavigate } from 'react-router-dom';
import { Container } from 'components/App.styled';
import { Button, Card, Div, Wrap } from './MovieDetails.styled';
import { StyledLink } from 'pages/HomePage.styled';
import { Suspense } from 'react';

const MovieDetailsPage = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  if (!movie) {
    return null;
  }

  return (
    <Container>
      <div>
        <Button onClick={() => navigate(location?.state?.from ?? '/')}>
          Go back
        </Button>
      </div>

      {movie && (
        <>
          <Card>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `}
              alt={movie.title}
              width="280"
            />
            <Wrap>
              <h2>{movie.title}</h2>
              <p>User Score: {Math.round(movie.popularity) + '%'}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(name => {
                  return (
                    <li key={name.name}>
                      <p>{name.name}</p>
                    </li>
                  );
                })}
              </ul>
            </Wrap>
          </Card>
          <Div>
            <h3>Additional information</h3>
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </Div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Container>
  );
};

export default MovieDetailsPage;
