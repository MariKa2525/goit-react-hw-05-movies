import { Outlet, useLocation } from 'react-router-dom';
import { useFetchMovie } from '../../hooks/useFetchMovie/useFetchMovie';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  Div,
  Subtitle,
  TextMovie,
  TitleMovie,
  Wrap,
} from './MovieDetails.styled';
import { ContainerMovie, StyledLink } from 'pages/HomePage.styled';
import { Suspense } from 'react';

const MovieDetailsPage = () => {
  const movie = useFetchMovie();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ContainerMovie>
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
              width="300"
            />
            <Wrap>
              <TitleMovie>{movie.title}</TitleMovie>
              <TextMovie>
                {' '}
                User Score: <span>
                  {Math.round(movie.popularity) + '%'}
                </span>{' '}
              </TextMovie>
              <Subtitle>Overview</Subtitle>
              <TextMovie>{movie.overview}</TextMovie>
              <Subtitle>Genres</Subtitle>
              <ul>
                {movie.genres.map(name => {
                  return (
                    <li key={name.name}>
                      <TextMovie>{name.name}</TextMovie>
                    </li>
                  );
                })}
              </ul>
            </Wrap>
          </Card>
          <Div>
            <Subtitle>Additional information</Subtitle>
            <StyledLink to="cast" state={{ from: location.state.from }}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </StyledLink>
          </Div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </ContainerMovie>
  );
};

export default MovieDetailsPage;
