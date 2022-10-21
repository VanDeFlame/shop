import { Product } from '@models/Product';
import React, { FC } from 'react'; 
import './ProductItem.scss';

interface Props {
  product: Product;
} 

const ProductItem:FC<Props> = ({product}) => {
  //
    /* DEV LOGIC */
    product.discount = Math.floor(Math.random()*(2))*50;
    product.shippingCost = Math.round(Math.random());
    product.photo = "https://m.media-amazon.com/images/I/619NEanEPDL._AC_UL320_.jpg";
  //
  const netPrice = product.price * (100 - product.discount)/100;

  return (
    <div className='ProductItem'>
      <figure className='ProductItem--figure'>
        <img 
          className='ProductItem--figure'
          src={product.photo}
          alt={product.name}
        />
      </figure>
      <div className='ProductItem--price'>
        <span className='price__net'>{  (netPrice) ? `$${netPrice}` : "FREE"  }</span>
        {
          !!product.discount && !!product.price &&
          <React.Fragment>
            <span className='price__gross'>${product.price}</span>
            <span className='price__discount'>- {product.discount}% off</span>
          </React.Fragment>
        }
        {
          (product.shippingCost === 0) &&
          <span>Free Shipping</span>
        }
      </div>
      <h4 className='ProductItem--title'>{product.name}</h4>
      {
        product.active
        ? <button className='ProductItem--CTA'>Add to cart</button>
        : <button className='ProductItem--CTA' disabled>Out of stock</button> 
      }
    </div>
  )
}

export { ProductItem };
