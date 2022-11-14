import React from 'react'; 
import './ProductFilter.scss';

interface Props {
  onSelectCategory: Function;
  onSubmit: Function;
} 

const Categories = ['Frutas y verduras', 'Pastelería', 'Carnes y pescados', 'Lácteos y huevos', 'Bebidas', 'Licores', 'Cuidado personal', 'Despensa'];

function ProductFilter({onSelectCategory, onSubmit}: Props) {
  const [toggleFilters, setToggleFilters] = React.useState(false);

  return (
    <div className='ProductFilter'>
      <div className={`show__${toggleFilters}`}>
        <div className='ProductFilter--categories'>
          <h3>Categories</h3>
        {
          Categories.map((sc, index) => (
            <button key={sc} onClick={() => onSelectCategory(index)}>{sc}</button>
          ))
        }
        </div>
        
        <form
          className='ProductFilter--attributes'
          onSubmit={e => onSubmit(e)}
        >
          <h3>Filters</h3>
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
            <label htmlFor='discount'>Min discount</label>
            <select name='discount'>
              <option value={''} key={'discount-0'}>All</option>
              {
                [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(d => 
                  <option value={d} key={'discount-'+d}>{d}%</option>
                )
              }
            </select>
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

      <button className="ProductFilter--toggleButton" onClick={() => setToggleFilters(!toggleFilters)}>
        <i className={
          `bi ${toggleFilters ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down' }`}
        ></i>
      </button>
    </div>
  )
}

export { ProductFilter };
