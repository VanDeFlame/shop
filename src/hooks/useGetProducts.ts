import React from "react";
import { Product } from "@models/Product";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY || "http://localhost:8081/agstore/api";

const useGetProducts = new Promise((resolve, reject) => {
  axios({
      baseURL: API_KEY,
      url: '/products/all',
      method: 'get',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.data)
    .then(resp => resolve(resp))
    .catch(e => reject(e));
})


export { useGetProducts };