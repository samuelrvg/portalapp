import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://grupojl.inpasa.com.br:8080/sigecapi/api/',
});

export default Api;
