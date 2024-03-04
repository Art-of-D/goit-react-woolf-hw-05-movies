import styled from './CastElement.module.css';

export const CastElement = ({ cast }) => {
  console.log('cast', cast);
  return (
    <>
      {cast.map(({ id, name, character, profile_path: profilePath }) => {
        return (
          <li key={id} className={styled.CastElement}>
            <img
              className={styled.CastElementImg}
              src={
                profilePath
                  ? 'https://image.tmdb.org/t/p/w500' + profilePath
                  : process.env.PUBLIC_URL + '/unknown-person.jpg'
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </>
  );
};
