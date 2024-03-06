import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWZlODRhOGFiYmRkODI0MTg5MTI1Zjk4MjA3NmU0NyIsInN1YiI6IjY1ZTMyM2MxYzk5ODI2MDE3YjYxNjBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lQVgdN6GSUDLR61rhVNwJdpW6ifJhBnJqsPP1xNmZ5Y';

export const getFilms = async () => {
  try {
    const trends = await axios.get('/trending/all/day');
    return trends.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFilmByName = async name => {
  try {
    const filmByName = await axios.get('/search/movie', {
      params: { query: name },
    });
    return filmByName.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFilmById = async movieId => {
  try {
    const film = await axios.get(`/movie/${movieId}`);
    return formatDataById(film.data);
  } catch (e) {
    console.log(e);
  }
};

export const getFilmReviews = async movieId => {
  try {
    const filmReviews = await axios.get(`/movie/${movieId}/reviews`);
    return filmReviews.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFilmCast = async movieId => {
  try {
    const filmCast = await axios.get(`/movie/${movieId}/credits`);
    return filmCast.data.cast;
  } catch (e) {
    console.log(e);
  }
};

const formatDataById = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return {
    poster: 'https://image.tmdb.org/t/p/w500' + poster_path,
    title: title,
    releaseDate: release_date,
    voteAverage: vote_average,
    overview: overview,
    genres: genres,
  };
};
