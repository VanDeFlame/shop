import React, { FC, ReactNode } from 'react'; 
import './Header.scss';

interface Props {
  children: ReactNode;
} 

const Header:FC<Props> = ({children}) => {
  return (
    <header className='Header'>
      {children}
    </header>
  )
}

export { Header };
