import { getFilmByName } from 'api/films/getFilmsData';
import styled from './Movies.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [input, setInput] = useState('');
  const [params, setParams] = useSearchParams();
  const [filmList, setFilmList] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    setParams({
      query: input,
    });
    const response = await getFilmByName(input);
    setFilmList(response.results);
    setInput('');
  };

  useEffect(() => {
    const fetchFilms = async () => {
      const query = params.get('query');
      if (query) {
        const response = await getFilmByName(query);
        setFilmList(response.results);
      }
    };
    fetchFilms();
  }, [params]);

  return (
    <>
      <form className={styled.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styled.SearchFormInput}
          type="text"
          autoComplete="off"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={styled.SearchFormButton}>
          Search
        </button>
      </form>
      {filmList && <MovieList filmList={filmList} />}
    </>
  );
};

export default Movies;
