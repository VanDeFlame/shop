import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.scss';
import './__vars.scss';
import './__themes.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
    