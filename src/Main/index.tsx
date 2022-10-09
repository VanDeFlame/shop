import React, { FC, ReactNode } from 'react'; 
import './Main.scss';

interface Props {
  children: ReactNode;
} 

const Main:FC<Props> = ({children}) => {
  return (
    <main className='Main'>
      {children}
    </main>
  )
}

export { Main };
