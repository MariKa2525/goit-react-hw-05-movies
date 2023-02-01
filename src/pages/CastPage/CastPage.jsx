import { fetchMovieCast } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const CastPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie ? (
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
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : <p>We don`t iformation about cast of this movie.</p>}
    </>
  );
};

export default CastPage;
