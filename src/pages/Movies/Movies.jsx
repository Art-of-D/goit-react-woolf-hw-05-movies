import { getFilmByName } from 'api/films/getFilmsData';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmList, setFilmList] = useState([]);

  const searchMovies = async input => {
    setSearchParams({
      query: input,
    });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      const fetchFilms = async () => {
        const response = await getFilmByName(query);
        setFilmList(response.results);
      };
      fetchFilms();
    }
  }, [searchParams]);

  return (
    <>
      <MoviesForm searchMovies={searchMovies} />
      {filmList && <MovieList filmList={filmList} />}
    </>
  );
};

export default Movies;
