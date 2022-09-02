import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';
import "./scss/app.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </AppContextProvider>
);


