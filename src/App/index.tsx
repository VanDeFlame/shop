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
import { ProductFilter } from '@components/ProductFilter';
import { useGetProducts } from '@hooks/useGetProducts';
import { Product } from '@models/Product';

function App() {
  const [toggleMenu, setToggleMenu] = React.useState(false);  
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    useHandleTheme();
    useGetProducts
      .then(resp => {
        if (resp instanceof Array) setProducts(resp)
      })
      .catch(error => console.error(error));
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
            <HandleThemeButton onClick={useHandleTheme} />
          </Menu>
        }
      </Header>
      <Main>
        <div>
          <ProductFilter />
          <ProductList>
            {
              products.map((item) => 
                <ProductItem product={item} key={`Product-${item.productId}`}/>
              )
            }
          </ProductList>
        </div>
        
      </Main>
      <Footer>
        Footer
      </Footer>
    </React.Fragment>
  )
}

export { App };