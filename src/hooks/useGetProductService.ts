import React from "react";
import { Product } from "@models/Product";
import axios from "axios";
import { useGetToken } from "./useAuthService";

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_TOKEN = useGetToken() //localStorage.getItem("API_TOKEN");

const axiosConfig = {
  baseURL: `${API_KEY}/products`,
  method: 'get',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer `,
    // 'Authorization': `Bearer ${API_TOKEN}`,
  },
}

const useGetProductAll = new Promise<Product[]>(async (resolve, reject) => {
  axiosConfig.headers.Authorization += await useGetToken()
  console.log(axiosConfig)

  axios({...axiosConfig, url: '/all',})
    .then(resp => resp.data)
    .then(resp => resolve(resp))
    .catch(e => reject(e));
})

const useGetProductById = (id: number) => {
  return new Promise<Product>((resolve, reject) => {
    axios({...axiosConfig, url: `/${id}` })
      .then(resp => resp.data)
      .then(resp => resolve(resp))
      .catch(e => reject(e));
  })
}

export { useGetProductAll, useGetProductById };