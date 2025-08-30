import React from 'react';
import ReactDOM from 'react-dom/client';
import './ultils/styles/main.scss'
import './i18n';
import Layout from './layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);