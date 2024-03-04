import { Link, useLocation } from 'react-router-dom';
import styled from './MovieList.module.css';

export const MovieList = ({ filmList }) => {
  const location = useLocation();

  return (
    <>
      <ul className={styled.MovieList}>
        {filmList.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link
                className={styled.MovieListLink}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title ? title : name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
