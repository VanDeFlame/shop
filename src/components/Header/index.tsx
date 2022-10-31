import React, { FC, ReactNode } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.scss';

interface Props {
  children: ReactNode;
} 

const Header:FC<Props> = ({children}) => {
  return (
    <header className='Header'>
      <Link to="/">
        <img 
          className='Header--logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Circle-icons-umbrella.svg/512px-Circle-icons-umbrella.svg.png?20160314153956" alt="Paraguapp Logo" />
        <h2>Paraguapp</h2>
      </Link>
      {children}
    </header>
  )
}

export { Header };
