import React, { FC, FormEvent, useEffect } from 'react'; 
import './Home.scss';
import { useGetProductAll, useGetProductsWithFilters } from '@hooks/useGetProductService';
import { Link } from 'react-router-dom';
import { ProductFilter } from '@components/ProductFilter';
import { ProductList } from '@components/ProductList';
import { ProductItem } from '@components/ProductItem';
import { Product } from '@models/Product';
import { Error } from '@components/Error';

const Home:FC = () => {
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

  const onSelectSubcategory = (sc: number) => {
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
        onSelectSubcategory={onSelectSubcategory}
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

export { Home };
