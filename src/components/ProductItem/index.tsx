import { Product } from '@models/Product';
import React, { FC } from 'react'; 
import './ProductItem.scss';

interface Props {
  product: Product;
} 

const ProductItem:FC<Props> = ({product}) => {
  //
    /* DEV LOGIC */
    // product.discount = Math.floor(Math.random()*(2))*50;
    // product.freeShipping = Math.round(Math.random());
    product.photos = ["https://www.ikea.com/us/en/images/products/groessby-umbrella-blue-yellow__0580126_pe670065_s5.jpg?f=xs"];
    // product.active = !!Math.round(Math.random());
  //
  const netPrice = product.price * (100 - product.discount)/100;

  return (
    <div className='ProductItem'>
      <figure className='ProductItem--figure'>
        <img 
          className='ProductItem--figure--img'
          src={product?.photos?.length ? product.photos[0] : ''}
          alt={product.name}
        />
      </figure>
      <div className='ProductItem--price'>
        { (product.freeShipping) && <span>Free Shipping</span> }
        {
          (product.discount > 0) ?
          <React.Fragment>
            <h5 className='price__gross'><s>${product.price}</s></h5>
            <span className='price__net'>{  (netPrice) ? `$${netPrice}` : "FREE"  }</span>
            <span className='price__discount'>- {product.discount}% off</span>
          </React.Fragment>
          : <span className='price__net'>{ (netPrice) ? `$${netPrice}` : "FREE" }</span>
        }
      </div>
      <h4 className='ProductItem--title'>{product.name}</h4>
      {
        // product.active
        // ? <button className='ProductItem--CTA'>Add to cart</button>
        // : <button className='ProductItem--CTA' disabled>Out of stock</button> 
      }
    </div>
  )
}

export { ProductItem };
