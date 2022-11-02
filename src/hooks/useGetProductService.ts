import { Product } from "@models/Product";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_TOKEN = localStorage.getItem("API_TOKEN");

const defaultConfig = {
  method: 'get',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
  },
}

const useGetProductAll = new Promise<Product[]>(async (resolve, reject) => {
  fetch(`${API_KEY}/products/all`, defaultConfig)
    .then(resp => resp.json())
    .then(resp => (!resp.error) ? resolve(resp) : reject(resp))
    .catch(e => reject(e))
})

const useGetProductById = (id: number) => {
  return new Promise<Product>((resolve, reject) => {
    fetch(`${API_KEY}/products/${id}`, defaultConfig)
      .then(resp => resp.json())
      .then(resp => (!resp.error) ? resolve(resp) : reject(resp))
      .catch(e => reject(e));
  })
}

const useGetProductsWithFilters = (filters: string, category?: number) => {
  let url = `${API_KEY}/products/filtered`;
  if (Boolean(category)) { url = `${API_KEY}/products/category/${category}` }

  url += filters;

  return new Promise<Product[]>((resolve, reject) => {
    fetch(url, defaultConfig)
      .then(resp => resp.json())
      .then(resp => (!resp.error) ? resolve(resp) : reject(resp))
      .catch(e => reject(e));
  })
}

export { useGetProductAll, useGetProductById, useGetProductsWithFilters };