import { fetchMovieCast } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const CastPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movie.cast.length)

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovie);
  }, [movieId]);

  // return (
  //   <>
  //    {movie !== null && movie.cast.length > 0 ? (<p>'good'</p>) : (<p>'We don`t have iformation about cast of this movie.'</p>)}
  //   </>
  // )

  return (
    <>
      {movie !== null && movie.cast.length > 0 ? (
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
      ) : (
        <p>We don`t have iformation about cast of this movie.</p>
      )}
    </>
  );
};

export default CastPage;
