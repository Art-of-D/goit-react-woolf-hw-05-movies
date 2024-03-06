import styled from './Cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'api/films/getFilmsData';
import { CastElement } from 'components/CastElement/CastElement';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const reviewsData = await getFilmCast(movieId);
        setCast(reviewsData);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      <ul className={styled.CastList}>
        {cast.length > 0 && <CastElement cast={cast} />}
      </ul>
    </>
  );
};

export default Cast;
