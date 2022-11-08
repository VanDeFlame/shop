import { Product } from "@models/Product";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_TOKEN = localStorage.getItem("API_TOKEN");

const defaultConfig = {
  method: 'post',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
  },
}

const useCreateProduct = (product: Product) => {
  let config = {
    ...defaultConfig,
    body: JSON.stringify(product),
  }
  
  return new Promise<Product>((resolve, reject) => {
    fetch(`${API_KEY}/products/save`, config)
      .then(resp => resp.json())
      .then(resp => resolve(resp))
      .catch(e => reject(e));
  })
}

const useEditProduct = (product: Product) => {
  let config = {
    ...defaultConfig,
    body: JSON.stringify(product),
  }
  
  return new Promise<Product>((resolve, reject) => {
    fetch(`${API_KEY}/products/edit`, config)
      .then(resp => resp.json())
      .then(resp => resolve(resp))
      .catch(e => reject(e));
  })
}

const useRemoveProduct = (id: number) => {
  let config = {
    ...defaultConfig,
    method: 'delete',
  }
  
  return new Promise((resolve, reject) => {
    fetch(`${API_KEY}/products/delete/${id}`, config)
      .then(resp => resp.json())
      .then(resp => resolve(resp))
      .catch(e => reject(e));
  })
}

export { useCreateProduct, useEditProduct, useRemoveProduct };