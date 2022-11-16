import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalculateProvider } from './contexts/calculate';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculateProvider>
      <App />
    </CalculateProvider>
  </React.StrictMode>
);