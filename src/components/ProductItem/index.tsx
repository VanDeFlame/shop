import { Product } from '@models/Product';
import React, { FC } from 'react'; 

interface Props {
  product: Product;
} 

const ProductItem:FC<Props> = ({product}) => {
  return (
    <div>
      {product.name}
    </div>
  )
}

export { ProductItem };
