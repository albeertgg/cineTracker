import { createBrowserRouter, redirect } from 'react-router';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import MyMoviesPage from './pages/MyMoviesPage';
import NotFoundPage from './pages/NotFoundPage';

import MovieDetailPage from './pages/MovieDetailPage';
import { getItemFromLocalStorage } from './helpers/getUserFromLocalStorage';
import type { User } from './config/types';

async function privateRouteLoader({ request }: { request: Request }) {
  const userLocalStorage = localStorage.getItem('movie-tracker-user');
  const user = userLocalStorage ? JSON.parse(userLocalStorage) : null;

  if (!user) {
    return redirect('/login?from=' + request.url.split('/').at(-1));
  }

  return null;
}

async function publicRouteLoader() {
  const user = getItemFromLocalStorage<User>('movie-tracker-user');

  if (user) {
    return redirect('/my-movies');
  }

  return null;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetailPage />,
      },
      {
        loader: publicRouteLoader,
        children: [
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/register',
            element: <RegisterPage />,
          },
        ],
      },

      {
        loader: privateRouteLoader,
        children: [
          {
            path: '/profile',
            element: <ProfilePage />,
          },

          {
            path: '/my-movies',
            element: <MyMoviesPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
