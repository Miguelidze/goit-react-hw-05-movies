import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';
import HomePage from 'views/HomePage/HomePage';
import MoviesPage from 'views/MoviesPage/MoviesPage';
import MovieDetailsPage from 'views/MovieDetailsPage/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:slug" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
}

// const HomePage = lazy(() =>
//   import('views/HomPage/HomePage' /* webpackChunkName: "home-page" */)
// );
// const MoviesPage = lazy(() =>
//   import('views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
// );
// const MovieDetailsPage = lazy(() =>
//   import('views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */)
// );
// const Cast = lazy(() =>
//   import('components/Cast/Cast' /* webpackChunkName: "cast" */)
// );
// const Reviews = lazy(() =>
//   import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */)
// );