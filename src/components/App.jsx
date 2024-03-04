import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from './Layout/CommonLayout';
import React, { lazy, Suspense } from 'react';
const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({ default: module.Home }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({ default: module.Movies }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({ default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({ default: module.Reviews }))
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
