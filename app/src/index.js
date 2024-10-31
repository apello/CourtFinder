import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore';

import Home from './home';
import Login from './auth/login';
import Signup from './auth/signup';
import Layout from './components/layout';

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

// const store = createStore({
//   authName:'_auth',
//   authType:'cookie',
//   cookieDomain: window.location.hostname,
//   cookieSecure: window.location.protocol === 'https:',
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider store={store}> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
