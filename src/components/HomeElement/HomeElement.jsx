import styled from './HomeElement.module.css';
import { Link } from 'react-router-dom';

export const HomeElement = ({ filmTrends }) => {
  return (
    <>
      {filmTrends.map(({ id, title, name }) => {
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
