import { CastPage } from 'pages/CastPage/CastPage';
import { HomePages } from 'pages/HomePage';
import { MovieDetails } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';
// import { MovieSubPage } from 'pages/MovieSubPage/MovieSubPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<HomePages />} />
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path='cast' element={<CastPage />}/>
        <Route path='reviews' element={<ReviewsPage />}/>

        </Route>
        
      </Route>
    </Routes>

      
    </Container>
    

  );
};
