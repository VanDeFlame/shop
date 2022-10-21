import React, { FC, ReactNode } from 'react'; 
import './ProductList.scss';

interface Props {
  children: ReactNode;
} 

const ProductList:FC<Props> = ({children}) => {
  return (
    <div className='ProductList'>
      {children}
    </div>
  )
}

export { ProductList };
