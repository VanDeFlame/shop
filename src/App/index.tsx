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
import { ProductPage } from '@components/ProductPage';
import { useGetToken } from '@hooks/useAuthService';
import { useCreateProduct } from '@hooks/usePostProductService';
import { defaultProducts } from '@dev/defaultProducts'
import { defaultCategories } from '@dev/defaultCategories'
import { Home } from '@components/Home';
import { Modal } from '@components/Modal';
import { ProductForm } from '@components/ProductForm';
import { Category } from '@models/Category';
import { Product } from '@models/Product';

function App() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleModal, setToggleModal] = React.useState(false);
  const [categories, setCategories] = React.useState<Category[]>([])

  useEffect(() => {
    useHandleTheme();
    useGetToken();

    setCategories(defaultCategories)
  }, [])

  const toggleSubMenu = (submenu: string) => {
    document.querySelectorAll('.Submenu').forEach(sm => 
      sm.classList.remove('show')
    );
    document.querySelector(`#submenu-${submenu}`)!.classList.toggle('show')
  }
  
  const onCreateProduct = (product: Product) => {
    useCreateProduct(product)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))

    setToggleModal(false)
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

              <li>
                <button onClick={() => toggleSubMenu('admin')}>Admin</button>
                <ul className='Submenu' id='submenu-admin'>
                  <button onClick={() => {setToggleMenu(false); setToggleModal(true)}}>Create Product</button>
                  <button onClick={() => defaultProducts.map(p => useCreateProduct(p))}>DEV - Products</button>
                </ul>
              </li>
              
              <li><HandleThemeButton onClick={useHandleTheme} /></li>
            </Menu>
          }
        </Header>

        <Main>
          <Routes>
            {/* PRODUCT PAGE */}
            <Route path="/product/:productId" element={<ProductPage />}/>

            {/* HOME */}
            <Route path="/" element={<Home />}/>

            <Route path="*" element={
              <h2>Not Found</h2>
            } />
          </Routes>
        </Main>

        <Footer>
          Footer
        </Footer>
        
        { 
          toggleModal &&
          <Modal onClose={() => setToggleModal(false)}>
            <ProductForm categories={categories} onAction={onCreateProduct}/>
          </Modal>
        }
      </Router>
    </React.Fragment>
  )
}

export { App };