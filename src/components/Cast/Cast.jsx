import { fetchMovieCast } from 'services/moviesApi';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import noFoto from '../../image/noFoto.jpg';
import { CastCard, CastList, CastSubtitle, Image } from './Cast.styled';
import { Text } from 'components/Reviews/Reviews.styled';

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
          <CastList>
            {movie.cast.map(({ id, profile_path, name, character }) => (
              <CastCard key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : noFoto
                  }
                  alt={name}
                  width="150"
                />

                <CastSubtitle>{name}</CastSubtitle>
                <CastSubtitle>Character: {character} </CastSubtitle>
              </CastCard>
            ))}
          </CastList>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Text>We don`t have iformation about cast of this movie.</Text>
      )}
    </>
  );
};

export default CastPage;
