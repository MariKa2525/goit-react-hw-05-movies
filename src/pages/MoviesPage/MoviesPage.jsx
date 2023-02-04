import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from '../../services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { ContainerMovie, StyledLink, Ul } from 'pages/HomePage.styled';
import { Btn, Input } from './MoviesPage.styled';
import { Text } from 'components/Reviews/Reviews.styled';

const MoviesPage = () => {
  const [moviesSearchByWord, setMoviesSearchByWord] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [check, setCheck] = useState(false);

  const movieName = searchParams.get('movieName');
  const location = useLocation();

  useEffect(() => {
    if (movieName !== '' && movieName !== null)
      fetchMovieByName(movieName).then(data => {
        setMoviesSearchByWord(data);
      });
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
    handleChangeCheck();
  };

  const handleChangeCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <main>
        <ContainerMovie>
          <form onSubmit={handleSubmit}>
            <Input type="text" name="movieName" onChange={handleChangeCheck} />
            <Btn type="submit" disabled={!check}>
              Search
            </Btn>
          </form>
          {moviesSearchByWord.length > 0 && (
            <>
              <Ul>
                {moviesSearchByWord.map(({ title, id }) => (
                  <li key={id}>
                    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                      {title}
                    </StyledLink>
                  </li>
                ))}
              </Ul>
              <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
              </Suspense>
            </>
          )}
          {moviesSearchByWord.length === 0 && movieName !== null && (
            <Text>Sorry no movie</Text>
          )}
        </ContainerMovie>
      </main>
    </>
  );
};

export default MoviesPage;
