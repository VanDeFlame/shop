import React, { FC } from 'react'; 
import './ProductFilter.scss';

interface Props {} 

const Categories = ['Shoes', 'Pants', 'T-Shirts'];

const ProductFilter:FC<Props> = (props) => {
  return (
    <div className='ProductFilter'>
      <div className='ProductFilter--categories'>
      {
        Categories.map(category => (
          <button key={category}>{category}</button>
        ))
      }
      </div>
      
      <div className='ProductFilter--attributes'>
        <div>
          <label htmlFor='price-min'>Min $</label>
          <input type='text' name='price-min' placeholder='000' min={0}/>
          <label htmlFor='price-max'>Max $</label>
          <input type='text' name='price-max' placeholder='999' min={5}/>
        </div>

        <div>
          <label htmlFor=''>Discount</label><input type='checkbox' />
        </div>
        <label htmlFor=''>Free shipping</label><input type='checkbox' />
        <input type='text' placeholder='Hats' />
      </div>
    </div>
  )
}

export { ProductFilter };
