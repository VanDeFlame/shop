import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

const axiosConfig = {
  baseURL: `${API_KEY}/auth`,
  method: 'post',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials':true,
    'Content-Type': 'application/json'
  }
}

const useGetToken = async () => {
  let token = "";

  axios({
    ...axiosConfig,
    url: '/authenticate',
    data: {
      username: USERNAME,
      password: PASSWORD
    }
  })
    .then(resp => resp.data)
    .then(resp => token = resp.jwt)
    // .then(resp => localStorage.setItem('API_TOKEN', token))
    .catch(e => console.error(e));

  return token;
}

export { useGetToken };