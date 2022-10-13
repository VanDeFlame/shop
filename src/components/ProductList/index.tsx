import React, { FC, ReactNode } from 'react'; 

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
