import './index.scss';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* TODO: error boundaries, routing, i18n, themes support features are out of scope */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
