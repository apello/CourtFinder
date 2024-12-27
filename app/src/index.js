// React && router
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// React-auth-kit
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

// Material UI Joy
import CssBaseline from '@mui/joy/CssBaseline';

// Pages
const Home = lazy(() => import('./home.js'));
const Login = lazy(() => import('./auth/login.js'));
const Signup = lazy(() => import('./auth/signup.js'));
const Listing = lazy(() => import('./features/listing.js'));
const Listings = lazy(() => import('./features/featureListings.js'));
const DefaultLayout = lazy(() => import('./components/DefaultLayout.js'));
const DashboardLayout = lazy(() => import('./components/DashboardLayout.js'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>

            <Route path="/" element={<DashboardLayout />}>
              <Route index path="listings" element={<Listings />} />
              <Route path="listings/:id" element={<Listing />} />
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
