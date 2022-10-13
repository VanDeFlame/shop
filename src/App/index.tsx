import React, { useEffect } from 'react';
import './App.scss';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Main } from '@components/Main';
import { Menu } from '@components/Menu';
import { ToggleMenuButton } from '@components/ToggleMenuButton';
import { useHandleTheme } from '@hooks/useHandleTheme';
import { HandleThemeButton } from '@components/HandleThemeButton';
import { ProductList } from '@components/ProductList';
import { ProductItem } from '@components/ProductItem';

let products = [
  {name: "Tortafritas"},
  {name: "Panchos"},
  {name: "Medialunas"},
  {name: "Cocacola"},
]

function App() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  useEffect(() => {
    useHandleTheme();
  }, [])
  
  return (
    <React.Fragment>
      <Header>
        <h1>Shop App</h1>

        <ToggleMenuButton onOpen={setToggleMenu} />
        { toggleMenu &&
          <Menu onClose={setToggleMenu}>
            <a href="#">Home</a>
            <a href="#">Cart</a>
            <a href="#">Profile</a>
            <a href="#">Admin</a>
            <button onClick={() => {products.push({name:"New Product"})}}>add New Product</button>
            <HandleThemeButton onClick={useHandleTheme} />
          </Menu>
        }
      </Header>
      <Main>
        Main

        <ProductList>
          {
            products.map((item, index) => 
              <ProductItem product={item} key={`${index}-${item.name}`}/>
            )
          }
        </ProductList>
        
      </Main>
      <Footer>
        Footer
      </Footer>
    </React.Fragment>
  )
}

export { App };