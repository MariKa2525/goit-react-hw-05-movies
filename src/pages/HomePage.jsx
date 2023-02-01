import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/moviesApi';
import { StyledLink, Title } from './HomePage.styled';
// import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation()

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

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
