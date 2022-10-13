import React, { FC, ReactNode } from 'react'; 
import './Menu.scss';

interface Props {
  onClose: Function;
  children: ReactNode;
} 

const Menu:FC<Props> = (props) => {
  return (
    <div className='Menu'>
      <div className='Menu--bg' onClick={() => props.onClose(false)} />
      <div className='Menu--container'>
        <button className='Menu--toggleButton' onClick={() => props.onClose(false)}>x</button>
        <nav className='Menu--container--nav'>
          {props.children}
        </nav>
      </div>
    </div>
  )
}

export { Menu };
