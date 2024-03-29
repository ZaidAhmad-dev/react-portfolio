import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);