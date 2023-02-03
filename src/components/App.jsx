import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('./Cast/Cast'));
const ReviewsPage = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Container>
  );
};
