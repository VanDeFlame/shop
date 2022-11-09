import React, { ReactNode } from 'react';
import './MenuMobileUI.scss';

interface Props {
  children: ReactNode;
}

function MenuMobileUI({children}: Props) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  
  return (
    <div className='MenuMobileUI'>
      <button className='MenuMobileUI--toggleMenuButton' onClick={() => setToggleMenu(true)} >
        <i className='bi bi-list'/>
      </button>

      {
        toggleMenu &&
        <div className='MenuMobileUI--modal'>
          <div className='MenuMobileUI--modal--bg' onClick={() => setToggleMenu(false)} />
          <div className='MenuMobileUI--modal--container'>
            <button className='MenuMobileUI--toggleMenuButton' onClick={() => setToggleMenu(false)}>x</button>
            { children }
          </div>
        </div>
      }
    </div>
  )
}

export default MenuMobileUI;