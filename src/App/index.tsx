import React from 'react';
import './App.scss';
import { ShopProvider } from '@components/Context';
import { AppUI } from './AppUI';

function App() {

  return (
    <ShopProvider>
      <AppUI />
    </ShopProvider>
  )
}

export { App };