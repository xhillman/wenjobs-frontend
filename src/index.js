import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Companies from './Components/Companies/table';
import Roles from './Components/Roles/form';
import People from './Components/People/form';
import ErrorPage from './Components/error-page';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    <RouterProvider router = {router} />
      <App />
    
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
