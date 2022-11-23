import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Home from './Components/Home';
// import LandingPage  from './Components/LandingPage/index'
import Companies from './Components/Companies/layout';
import Roles from './Components/Roles/layout';
import People from './Components/People/layout';
import ErrorPage from './Components/error-page';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>

        <Header />

        <Routes>

          <Route default path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route default path="/Companies" element={<Companies />} errorElement={<ErrorPage />} />
          <Route default path="/Roles" element={<Roles />} errorElement={<ErrorPage />} />
          <Route default path="/Connections" element={<People />} errorElement={<ErrorPage />} />

        </Routes>

      </BrowserRouter>

    </Auth0Provider>

  </React.StrictMode>
);
