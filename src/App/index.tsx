import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import { ProductPage } from '@components/ProductPage';
import { useGetProductAll } from '@hooks/useGetProductService';
import { Product } from '@models/Product';
import { useGetToken } from '@hooks/useAuthService';

function App() {
  const [toggleMenu, setToggleMenu] = React.useState(false);  
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    useHandleTheme();

    useGetProductAll
      .then(resp => setProducts(resp))
      .catch(error => console.error(error))
  }, [])
  
  return (
    <React.Fragment>
      <Router>
        <Header>
          <h1>Shop App</h1>

          <ToggleMenuButton onOpen={setToggleMenu} />
          { toggleMenu &&
            <Menu onClose={setToggleMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/">Admin</Link></li>
              <li><HandleThemeButton onClick={useHandleTheme} /></li>
            </Menu>
          }
        </Header>

        <Main>
          <Routes>

            <Route path="/product/:productId" element={
              <ProductPage />
            }/>

            {/* HOME */}
            <Route path="/" element={
              <div>
                <ProductFilter />
                <ProductList>
                  {
                    products.map((item) => 
                      <Link to={`/product/${item.productId}`} key={`Product-${item.productId}`}>
                        <ProductItem product={item}/>
                      </Link>
                    )
                  }
                </ProductList>
              </div>
            }/>

            <Route path="*" element={
              <h2>Not Found</h2>
            } />
          </Routes>
        </Main>

        <Footer>
          Footer
        </Footer>
        
      </Router>
    </React.Fragment>
  )
}

export { App };