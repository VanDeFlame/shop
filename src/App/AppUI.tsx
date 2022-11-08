// REACT
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ROUTES
import { ProductPage } from '@src/pages/ProductPage';
import { Home } from '@src/pages/Home';

// COMPONENTS
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Main } from '@components/Main';
import { Menu } from '@components/Menu';
import { Modal } from '@components/Modal';
import { ToggleMenuButton } from '@components/ToggleMenuButton';
import { HandleThemeButton } from '@components/HandleThemeButton';
import { ProductForm } from '@components/ProductForm';
import { Error } from '@components/Error';

// HOOKS
import { useHandleTheme } from '@hooks/useHandleTheme';
import { useGetToken } from '@hooks/useAuthService';
import { useCreateProduct } from '@hooks/usePostProductService';
import { useModal } from '@hooks/useModal';

import { defaultProducts } from '@dev/defaultProducts'
import { defaultCategories } from '@dev/defaultCategories'

// MODELS
import { Category } from '@models/Category';
import { Product } from '@models/Product';

const AppUI = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [categories, setCategories] = React.useState<Category[]>([])
  const { openModal } = useModal();
  
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
    console.log(product)
    useCreateProduct(product)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
  }
  
  return (
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
                <button onClick={() => {
                  setToggleMenu(false);
                  openModal(<ProductForm categories={categories}/>, onCreateProduct)
                }}>Create Product</button>
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
          <Route path="/product/:productId" element={<ProductPage/>}/>

          {/* HOME */}
          <Route path="/" element={<Home />}/>

          <Route path="*" element={<Error error={{error: "ERROR 404", msg: "Page not found"}}/>}/>
        </Routes>
      </Main>

      <Footer>
        Footer
      </Footer>
      
      <Modal />
    </Router>
  )
}

export { AppUI };
