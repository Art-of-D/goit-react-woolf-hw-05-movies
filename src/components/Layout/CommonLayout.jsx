import { NavLink, Outlet } from 'react-router-dom';
import styled from './CommonLayout.module.css';

export const CommonLayout = () => {
  return (
    <>
      <header className={styled.CommonLayout}>
        <nav className={styled.CommonLayoutNav}>
          <NavLink className={styled.CommonLayoutLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={styled.CommonLayoutLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
