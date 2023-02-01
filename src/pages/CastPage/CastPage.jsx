import { fetchMovieCast } from 'services/moviesApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const CastPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <ul>
            {movie.cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${profile_path} `}
                    alt={name}
                    width="150"
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
