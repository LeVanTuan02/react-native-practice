import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shop-server-tuan.herokuapp.com/api',
});

export default instance;
