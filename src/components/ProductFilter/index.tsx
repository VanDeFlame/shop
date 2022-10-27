import React, { FC, FormEvent } from 'react'; 
import './ProductFilter.scss';

interface Props {} 

const SubCategories = ['Shoes', 'Pants', 'T-Shirts'];

const ProductFilter:FC<Props> = (props) => {
  const [toggleFilters, setToggleFilters] = React.useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("price-min"))
    console.log(formData.get("price-max"))
    console.log(formData.get("discount"))
    console.log(formData.get("free-shipping"))
    console.log(formData.get("search"))
  }

  return (
    <div className='ProductFilter'>
      <div className={`show__${toggleFilters}`}>
        <div className='ProductFilter--subcategories'>
        {
          SubCategories.map(subcategory => (
            <button key={subcategory}>{subcategory}</button>
          ))
        }
        </div>
        
        <form
          className='ProductFilter--attributes'
          onSubmit={e => onSubmit(e)}
        >
          <div className='priceRange'>
            <input 
              className='priceRange--input' 
              type='number' 
              name='price-min' 
              placeholder='min price' 
              min={0}
            />
            <span>&#8722;</span>
            <input 
              className='priceRange--input' 
              type='number' 
              name='price-max' 
              placeholder='max price' 
              min={5}
            />
          </div>

          <div>
            <label htmlFor='discount'>Discount</label>
            <input name='discount' type='checkbox' />
          </div>

          <div>
            <label htmlFor='free-shipping'>Free shipping</label>
            <input name='free-shipping' type='checkbox' />
          </div>

          <div>
            <input name='search' type='text' placeholder='Hats' />
          </div>

          <button>Search</button>
        </form>
      </div>

      <button onClick={() => setToggleFilters(!toggleFilters)}>
        <i className={
          `bi ${toggleFilters ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down' }`}
        ></i>
      </button>
    </div>
  )
}

export { ProductFilter };
