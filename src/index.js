import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
=======
// import App from './App';
import Home from './Components/Home';
>>>>>>> 379b063 (integrate landing page into router)
import Companies from './Components/Companies/table';
import Roles from './Components/Roles/form';
import People from './Components/People/form';
import ErrorPage from './Components/error-page';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Companies',
    element: <Companies />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Roles',
    element: <Roles />,
    errorElement: <ErrorPage />
  },
  {
    path: '/People',
    element: <People />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router = {router} />
    
=======
>>>>>>> 379b063 (integrate landing page into router)
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
<<<<<<< HEAD
=======
      <RouterProvider router={router} />
      {/* <App /> */}
>>>>>>> 379b063 (integrate landing page into router)
    </Auth0Provider>
  </React.StrictMode>
);
