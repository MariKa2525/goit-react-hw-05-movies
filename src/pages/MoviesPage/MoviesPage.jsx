import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from '../../services/moviesApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyledLink } from 'pages/HomePage.styled';
import { Btn, Input } from './MoviesPage.styled';


export const MoviesPage = () => {
  const [moviesSearchByWord, setMoviesSearchByWord] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');

    useEffect(() => {
    if (movieName !== '' && movieName !== null)
    fetchMovieByName(movieName).then(data => {
        // console.log(data);
        setMoviesSearchByWord(data);
      });
  }, [movieName]);


  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="movieName" />
        <Btn type="submit">Search</Btn>
      </form>
      <ul>
        {moviesSearchByWord.map(({ title, id }) => (
          <li key={id}>
            <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

