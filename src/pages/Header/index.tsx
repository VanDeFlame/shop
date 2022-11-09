import React, { lazy } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.scss';

// COMPONENTS
const Menu = lazy(() => import('@components/Menu'))
const HandleThemeButton = lazy(() => import('@components/HandleThemeButton'));
const ProductForm = lazy(() => import('@components/ProductForm'));

// DEV
import { defaultProducts } from '@dev/defaultProducts'
import { defaultCategories } from '@dev/defaultCategories'

// HOOKS
import { useCreateProduct } from '@hooks/usePostProductService';
import { useHandleTheme } from '@hooks/useHandleTheme';
import { useModal } from '@hooks/useModal';

// MODELS
import { Product } from '@models/Product';

function Header() {
  const { openModal } = useModal();
  
  const toggleSubMenu = (submenu: string) => {
    const submenuToShow = document.querySelector(`#submenu-${submenu}`);
    document.querySelectorAll('.Submenu').forEach(sm => 
      (sm === submenuToShow)
      ? sm.classList.toggle('show')
      : sm.classList.remove('show')
    );
  }

  const onCreateProduct = (product: Product) => {
    console.log(product)
    useCreateProduct(product)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
  }

  return (
    <header className='Header'>
      <Link to='/'>
        <img 
          className='Header--logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Circle-icons-umbrella.svg/512px-Circle-icons-umbrella.svg.png?20160314153956' alt='Paraguapp Logo' />
        <h2 className='Header--title'>Paraguapp</h2>
      </Link>

      <Menu>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/'>Profile</Link></li>

        <li>
          <button onClick={() => toggleSubMenu('admin')}>Admin</button>
          <ul className='Submenu' id='submenu-admin'>
            <li>
              <button 
                onClick={() => {openModal(
                  <ProductForm categories={defaultCategories}/>,
                  onCreateProduct
                )}}
              >Create Product</button>
            </li>
            <li>
              <button 
                onClick={() => defaultProducts.map(p => useCreateProduct(p))}
              >DEV - Products</button>
            </li>
          </ul>
        </li>
        
        <li><HandleThemeButton onClick={useHandleTheme} /></li>
      </Menu>
    </header>
  )
}

export { Header };