import styled from './HomeElement.module.css';
import { Link } from 'react-router-dom';

export const HomeElement = ({ filmTrends: { results } }) => {
  console.log(results);
  return (
    <>
      {results.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link className={styled.HomeElementLink} to={`/movies/${id}`}>
              {title ? title : name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
