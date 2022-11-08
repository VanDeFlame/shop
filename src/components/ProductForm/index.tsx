import React, { FC } from 'react';
import './ProductForm.scss';
import { Category } from '@models/Category';
import { Product } from '@models/Product';

interface Props {
  categories: Category[];
  onAction?: Function;
  onClose?: Function;
}

const ProductForm:FC<Props> = ({categories, onAction, onClose}) => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get('name')?.toString() ?? '';
    const active = formData.get('active')?.toString() ?? '';
    const price = formData.get('price')?.toString() ?? '';
    const category = formData.get('category')?.toString() ?? '';
    const photo = formData.get('photo')?.toString() ?? '';
    const discount = formData.get('discount')?.toString() ?? '';
    const freeShipping = formData.get('freeShipping')?.toString() ?? '';
    const stock = formData.get('stock')?.toString() ?? '';

    onAction!({
      productId: 0,
      name: name,
      active: (active === 'on'),
      price: parseInt(price),
      categoryId: parseInt(category),
      photo: photo,
      discount: parseInt(discount),
      freeShipping: (freeShipping === 'on'),
      stock: parseInt(stock),
    })
  }

  return (
    <form onSubmit={e => onSubmit(e)} className='ProductForm'>
      {/* Name */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="name">Product Name:</label>
        <input className='ProductForm--field--input' type="text" name='name' required />
      </div>
      {/* Photo */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="photo">Photo:</label>
        <input className='ProductForm--field--input' type="url" name='photo' />
      </div>
      {/* Category */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="category">Category:</label>
        <select className='ProductForm--field--input' name='category' required>
          { categories.map(cat => 
            <option 
              value={cat.categoryId} 
              key={'category'+cat.categoryId}
            >{cat.category}</option>
          )}
        </select>
      </div>
      {/* Price */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor='price'>Price:</label>
        <input className='ProductForm--field--input' type="number" min='0' name='price' required />
      </div>
      {/* Discount */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor='discount'>Discount:</label>
        <input className='ProductForm--field--input' type="number" min='0' max='100' name='discount' defaultValue={0} />
      </div>
      {/* Free Shipping */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="freeShipping">Free Shipping:</label>
        <input className='ProductForm--field--input' type="checkbox" name='freeShipping' />
      </div>
      {/* Active */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="active">Product is active?</label>
        <input className='ProductForm--field--input' type="checkbox" name='active' defaultChecked/>
      </div>
      {/* Stock */}
      <div className='ProductForm--field'>
        <label className='ProductForm--field--label' htmlFor="stock">Stock available</label>
        <input className='ProductForm--field--input' type="number" name='stock' required />
      </div>

      <button>Create</button>
      <button type='button' onClick={() => onClose!()}>Cancel</button>
    </form>
  )
}

export { ProductForm };
