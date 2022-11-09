import React, { ReactNode } from 'react'; 
import './ProductList.scss';

interface Props {
  children: ReactNode;
} 

function ProductList({children}: Props) {
  return (
    <div className='ProductList'>
      {children}
    </div>
  )
}

export { ProductList };
