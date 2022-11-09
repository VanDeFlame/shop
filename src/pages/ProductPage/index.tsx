import React, { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import './ProductPage.scss';

// COMPONENTS
import { ImageGallery } from '@components/ImageGallery';
const Error = React.lazy(() => import('@components/Error'));
const ModalTrueFalse = React.lazy(() => import('@components/ModalTrueFalse'));

// HOOKS
import { useModal } from '@hooks/useModal';
import { useGetProductById } from '@hooks/useGetProductService';
import { useRemoveProduct } from '@hooks/usePostProductService';

// MODELS
import { Product } from '@models/Product';

function ProductPage() {
  const [product, setProduct] = React.useState<Product>();
  const [id, setId] = React.useState<number>(-1);
  const { productId } = useParams();
  const { openModal } = useModal();

  const error = {
    error: 'Sowwy :(',
    message: 'Product not found'
  };
  
  useEffect(() => {
    let pId: number = parseInt(productId!)
    if (isNaN(pId)) return;
    
    useGetProductById(pId)
      .then(resp => {resp.photos = [
        'https://www.ikea.com/us/en/images/products/groessby-umbrella-blue-yellow__0580126_pe670065_s5.jpg?f=xs',
        'https://pyxis.nymag.com/v1/imgs/6e7/efe/38cda0518ffdace0248db8c2fa9dadadbe-repel-teflon-umbrella.rsquare.w600.jpg',
        'https://cdn.shopify.com/s/files/1/0490/9324/7140/products/1444_blue-sky-open_1600x.jpg?v=1603668731','https://www.ikea.com/us/en/images/products/groessby-umbrella-blue-yellow__0580126_pe670065_s5.jpg?f=xs',
        'https://pyxis.nymag.com/v1/imgs/6e7/efe/38cda0518ffdace0248db8c2fa9dadadbe-repel-teflon-umbrella.rsquare.w600.jpg',
        'https://cdn.shopify.com/s/files/1/0490/9324/7140/products/1444_blue-sky-open_1600x.jpg?v=1603668731','https://www.ikea.com/us/en/images/products/groessby-umbrella-blue-yellow__0580126_pe670065_s5.jpg?f=xs',
        'https://pyxis.nymag.com/v1/imgs/6e7/efe/38cda0518ffdace0248db8c2fa9dadadbe-repel-teflon-umbrella.rsquare.w600.jpg',
        'https://cdn.shopify.com/s/files/1/0490/9324/7140/products/1444_blue-sky-open_1600x.jpg?v=1603668731',
      ]; return resp})
      .then(resp => setProduct(resp))
      .then(resp => setId(pId))
      .catch(err => console.error(err));
  }, [])

  const onDeleteProduct = () => {
    useRemoveProduct(id)
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
  }

  return (
    <div>{
      (!product) ? <Error error={error} /> : 

    <React.Fragment>
      <div>
        {/* IMAGES SHOW */}
        <ImageGallery images={product.photos} />

        {/* PRODUCT INFO SIDEBAR */}
        <section>
          <h2>{product.name}</h2>

          {
            !product.active ? <h3>Product paused</h3> :
            <React.Fragment>
              <div>                
                {
                  (product.discount > 0) ?
                  <React.Fragment>
                    <h4><s>${product.price}</s></h4>
                    <h3>${product.price - product.price*(product.discount/100)}</h3>
                    <span>{product.discount}% OFF</span>
                  </React.Fragment>
                  : <h3>${product.price}</h3>
                }
              </div>
              { product.freeShipping && <span>Free Shipping</span> }

              <h3>Stock: {product.stock}</h3>
            </React.Fragment>            
          }
        </section>

        {/* PRODUCT DESCRIPTION */}
        <section>
          <p>{product?.description}</p>
        </section>
        
      </div>
      
      <button 
        onClick={() => openModal(
          <ModalTrueFalse msg='Do you want delete this product?'/>,
          onDeleteProduct
        )}
      >Delete</button>

    </React.Fragment>
    }</div>
  )
}

export default ProductPage;
