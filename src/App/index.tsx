import React, { FormEvent, useEffect } from 'react';
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
import { useGetProductAll, useGetProductsWithFilters } from '@hooks/useGetProductService';
import { Product } from '@models/Product';
import { useGetToken } from '@hooks/useAuthService';

function App() {
  const [toggleMenu, setToggleMenu] = React.useState(false);  
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    useHandleTheme();
    useGetToken()

    useGetProductAll
      .then(resp => setProducts(resp))
      .catch(error => console.error(error))
  }, [])

  const onSelectSubcategory = (sc: number) => {
    useGetProductsWithFilters('', sc)
      .then(resp => setProducts(resp))
    console.log(sc)
  }

  const onFilterProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const priceMin = formData.get("price-min");
    const priceMax = formData.get("price-max");
    const discount = formData.get("discount");
    const freeShipping = (formData.get("free-shipping") === "on");
    const search = formData.get("search");

    let filter = '?';
    if (Boolean(priceMin)) filter += `priceMin=${priceMin}&`;
    if (Boolean(priceMax)) filter += `priceMax=${priceMax}&`;
    if (Boolean(discount)) filter += `discount=${discount}&`;
    if (Boolean(freeShipping)) filter += `freeShipping=${freeShipping}&`;
    if (Boolean(search)) filter += `search=${search}&`;

    if (filter.length <= 1) return;
    filter = filter.slice(0, -1)
     
    console.log(filter)
    useGetProductsWithFilters(filter)
      .then(resp => setProducts(resp))
  }
  
  return (
    <React.Fragment>
      <Router>
        <Header>
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
                <ProductFilter
                  onSelectSubcategory={onSelectSubcategory}
                  onSubmit={onFilterProducts}
                />
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