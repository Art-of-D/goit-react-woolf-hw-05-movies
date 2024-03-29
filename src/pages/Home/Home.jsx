import { HomeElement } from 'components/HomeElement/HomeElement';
import { useState, useEffect } from 'react';
import { getFilms } from 'api/films/getFilmsData';
import styled from './Home.module.css';

const Home = () => {
  const [filmTrends, setFilmTrends] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getFilms();
        setFilmTrends(response.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h1 className={styled.HeadOne}>Trending today</h1>
      <ul className={styled.HomeList}>
        {filmTrends.length > 0 && <HomeElement filmTrends={filmTrends} />}
      </ul>
    </>
  );
};

export default Home;
