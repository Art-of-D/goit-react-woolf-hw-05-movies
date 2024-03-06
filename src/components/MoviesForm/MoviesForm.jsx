import styled from './MoviesForm.module.css';
import { useState } from 'react';

export const MoviesForm = ({ searchMovies }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    searchMovies(input);
    setInput('');
  };

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
    </>
  );
};
