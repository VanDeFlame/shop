import React, { ReactNode } from 'react'; 
import './Main.scss';

interface Props {
  children: ReactNode;
} 

function Main({children}: Props) {
  return (
    <main className='Main' id='main'>
      {children}
    </main>
  )
}

export { Main };
