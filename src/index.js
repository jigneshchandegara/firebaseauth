import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-mgy6mr0z6a3urard.us.auth0.com"
    clientId="9FLycoCeVzNRksOjJ9Bm0sN6yjC5OnQo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
);

