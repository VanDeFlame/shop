import React, { FC, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { Product } from '@models/Product';
import { useGetProductById } from '@hooks/useGetProductService';
import './ProductPage.scss';

const ProductPage = () => {
  const [product, setProduct] = React.useState<Product>()
  const [error, setError] = React.useState<string>()
  const { productId } = useParams();

  useEffect(() => {
    let id: number = parseInt(productId ?? "")
    if (isNaN(id)) return setError("Invalid ID");

    useGetProductById(id)
      .then(resp => setProduct(resp))
      .then(resp => console.log(product))
      .catch(error => console.error(error));

  }, [])
    

  return (
    <div>
      {
        Boolean(error) ? error : product?.name
      }
    </div>
  )
}

export { ProductPage };
