
import { Outlet } from 'react-router-dom';
import { useFetchMovie } from '../../hooks/useFetchMovie/useFetchMovie'
import { useNavigate } from "react-router-dom";
import { Container } from 'components/App.styled';
import { Button, Card, Div, Wrap } from './MovieDetails.styled';
import { StyledLink } from 'pages/HomePage.styled';

export const MovieDetails = () => {
    const movie = useFetchMovie();
  
    // console.log(movie.genres[0].name)
    const navigate = useNavigate()
    // const location = useLocation();

    return (
        // console.log(movie.genres[0.name]));
        <Container>
          <div>
        <Button onClick={()=> navigate("/")}>Go back</Button>
        </div>
        
          {movie && (
            <>
            <Card>
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `} alt={movie.title} width='280'/>
              <Wrap>
              <h2>{movie.title}</h2>
              <p></p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>{movie.genres[0].name}</ul>
              </Wrap>
              </Card>
              <Div>
              <h3>Additional information</h3>
              <StyledLink to="cast">Cast</StyledLink>
              <StyledLink to="reviews">Reviews</StyledLink>
              </Div>
              <Outlet />
              </>
          )}
          
        </Container>
      );
}
