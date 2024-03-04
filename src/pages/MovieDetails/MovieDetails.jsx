import styled from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useParams,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getFilmById } from 'api/films/getFilmsData';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

  const calculatePercentage = float => {
    return Math.floor((float % 10) * 10);
  };

  const calculateYear = date => {
    return new Date(date).getFullYear();
  };

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const filmData = await getFilmById(movieId);
        setFilm({
          poster: 'https://image.tmdb.org/t/p/w500' + filmData.poster_path,
          title: filmData.title,
          releaseDate: filmData.release_date,
          voteAverage: filmData.vote_average,
          overview: filmData.overview,
          genres: filmData.genres,
        });
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };
    fetchFilm();
  }, [movieId]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to={location.state?.from || '/'} className={styled.BackButton}>
        <svg
          className={styled.BackButtonArrow}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Go back
      </Link>
      <div className={styled.FilmWrapper}>
        <img
          className={styled.MovieDetailsImg}
          src={film.poster}
          alt={film.title + 'poster'}
        />
        <div className={styled.FilmWrapperDescription}>
          <h2>
            {film.title} ({calculateYear(film.releaseDate)})
          </h2>
          <p>User score: {calculatePercentage(film.voteAverage)}%</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h4>Genres</h4>
          <ul>
            {film.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={styled.MovieDetailsAddInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink className={styled.MovieDetailsLink} to={'reviews'}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink className={styled.MovieDetailsLink} to={'cast'}>
              Cast
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
