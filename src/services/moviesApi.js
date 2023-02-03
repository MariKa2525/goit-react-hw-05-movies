import axios from 'axios';

const Key = '737f44acb671945f08fdde769a8111c9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: Key,
      size: 20,
    },
  });
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: Key,
    },
  });
  return response.data;
}

export async function fetchMovieByName(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: Key,
      size: 20,
      query,
    },
  });

  return response.data.results;
}


export async function fetchMovieCast(id) {
  const response = await axios(`movie/${id}/credits`, {
    params: {
      api_key: Key,
    },
  });
  return response.data;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: Key,
    },
  });
  return response.data;
}

