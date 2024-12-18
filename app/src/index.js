// routing
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// react-auth-kit
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

// Material UI Joy
import CssBaseline from '@mui/joy/CssBaseline';

// pages
import Home from './home.js';
import Login from './auth/login.js';
import Signup from './auth/signup.js';
import Listings from './dashboard/listings.js';
import DefaultLayout from './components/DefaultLayout.js';
import DashboardLayout from './components/DashboardLayout.js';

export const App = () => {
  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <AuthProvider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* DefaultLayout for general pages */}
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* DashboardLayout for protected routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Listings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
