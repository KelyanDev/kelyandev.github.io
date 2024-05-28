import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals(console.log);
