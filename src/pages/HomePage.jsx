import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/moviesApi';
import { StyledLink, Title, Ul } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  if (movies.length === 0) {
    return;
  }

  return (
    <>
      <Title>Trending today</Title>
      <Ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>{title}</StyledLink>
          </li>
        ))}
      </Ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
