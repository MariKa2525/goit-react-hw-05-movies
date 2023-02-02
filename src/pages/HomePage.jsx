import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/moviesApi';
import { StyledLink, Title } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
