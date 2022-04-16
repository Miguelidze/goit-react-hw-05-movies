// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'views/HomPage/HomePage';
import MoviesPage from 'views/MoviesPage/MoviesPage';
import MovieDetailsPage from 'views/MovieDetailsPage/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';


// const HomePage = lazy(() =>
//   import('views/HomePage' /* webpackChunkName: "home-page" */)
// );
// const MoviesPage = lazy(() =>
//   import('views/MoviesPage' /* webpackChunkName: "movies-page" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import('views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
// );
// const Cast = lazy(() =>
//   import('components/Cast' /* webpackChunkName: "cast" */)
// );
// const Reviews = lazy(() =>
//   import('components/Reviews' /* webpackChunkName: "reviews" */)
// );


export default function App () {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:slug" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
      />
    </>
  );
};



