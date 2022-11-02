import React, { FC, useEffect } from 'react'; 
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import { Product } from '@models/Product';
import { useGetProductById } from '@hooks/useGetProductService';
import { Error } from '@components/Error';

const ProductPage = () => {
  const [product, setProduct] = React.useState<Product>();
  const { productId } = useParams();
  const error = {
    error: 'Sowwy :(',
    message: 'Product not found'
  };

  useEffect(() => {
    let id: number = parseInt(productId!)
    if (isNaN(id)) return;
    
    useGetProductById(id)
      .then(resp => setProduct(resp))
      .catch(err => console.error(err));
  }, [])
    

  return (
    <div>{
      (!product) ? <Error error={error} /> : 
    
      <section>
        <h2>{product.name}</h2>
      </section>
    }</div>
  )
}

export { ProductPage };
