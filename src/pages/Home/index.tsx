import React, { FormEvent, lazy, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './Home.scss';

// COMPONENTS
import { ProductList } from '@components/ProductList';
import { ProductFilter } from '@components/ProductFilter';
const ProductItem = lazy(() => import('@components/ProductItem'));
const Error = lazy(() => import('@components/Error'));

// HOOKS
import { useGetProductAll, useGetProductsWithFilters } from '@hooks/useGetProductService';

// MODELS
import { Product } from '@models/Product';

function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [error, setError] = React.useState<any>(false);

  useEffect(() => {
    useGetProductAll
      .then(resp => setProducts(resp))
      .catch(err => {
        setError(err);
        console.error(err)
      })
  }, [])

  const onSelectCategory = (sc: number) => {
    useGetProductsWithFilters('', sc)
      .then(resp => setProducts(resp))
    console.log(sc)
  }

  const onFilterProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const priceMin = formData.get("price-min");
    const priceMax = formData.get("price-max");
    const discount = formData.get("discount");
    const freeShipping = (formData.get("free-shipping") === "on");
    const search = formData.get("search");

    let filter = '?';
    if (Boolean(priceMin)) filter += `priceMin=${priceMin}&`;
    if (Boolean(priceMax)) filter += `priceMax=${priceMax}&`;
    if (Boolean(discount)) filter += `discount=${discount}&`;
    if (Boolean(freeShipping)) filter += `freeShipping=${freeShipping}&`;
    if (Boolean(search)) filter += `search=${search}&`;

    if (filter.length <= 1) return;
    filter = filter.slice(0, -1)

    useGetProductsWithFilters(filter)
      .then(resp => setProducts(resp))
      .catch(err => {
        setError(err)
        console.error(err);
      });
  }

  return (
    <div className='Home'>
      <ProductFilter
        onSelectCategory={onSelectCategory}
        onSubmit={onFilterProducts}
      />
      { Boolean(error) && <Error error={error} /> }
      <ProductList>
        {
          products.map((item) =>
            <Link to={`/product/${item.productId}`} key={`Product-${item.productId}`}>
              <ProductItem product={item}/>
            </Link>
          )
        }
      </ProductList>
    </div>
  )
}

export default Home;
