import styled from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'api/films/getFilmsData';
import { ReviewsElement } from 'components/ReviewElement/ReviewsElement';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getFilmReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul className={styled.ReviewsList}>
        {Object.keys(reviews).length > 0 && reviews.results.length > 0 ? (
          <ReviewsElement reviews={reviews.results} />
        ) : (
          'We don`t have any reviews for this movie.'
        )}
      </ul>
    </>
  );
};
