import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './Components/TemplateComp/ScrollToTop';

ReactGA.initialize("G-YERLX2EJL6");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
        <ScrollToTop/>
        <App/>
      </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
