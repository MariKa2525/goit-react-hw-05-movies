import { fetchMovieCast } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import noFoto from '../../image/noFoto.jpg';
import { Image } from './CastPage.styled';

const CastPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie !== null && movie.cast.length > 0 ? (
        <>
          <ul>
            {movie.cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : noFoto
                  }
                  alt={name}
                  width="150"
                />

                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <p>We don`t have iformation about cast of this movie.</p>
      )}
    </>
  );
};

export default CastPage;
