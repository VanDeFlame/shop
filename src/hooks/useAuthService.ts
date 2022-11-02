const API_KEY = process.env.REACT_APP_API_KEY;
const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

const defaultConfig = {
  method: 'post',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

const useGetToken = async () => {
  const config = {
    ...defaultConfig,
    body: JSON.stringify({  username: USERNAME, password: PASSWORD })
  }
  let token = "";

  fetch(`${API_KEY}/auth/authenticate`, config)
    .then(resp => resp.json())
    .then(resp => token = resp.jwt)
    .then(resp => localStorage.setItem('API_TOKEN', token))
    .catch(e => console.error(e));
  return token;
}

export { useGetToken };