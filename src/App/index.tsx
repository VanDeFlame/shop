import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

function App() {
  return (
    <React.Fragment>
      <Header>
        <h1>Shop App</h1>
      </Header>
      <Main>
        Main
      </Main>
      <Footer>
        Footer
      </Footer>
    </React.Fragment>
  )
}

export { App };