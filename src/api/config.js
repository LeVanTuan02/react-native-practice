import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://7e5d-2402-800-61ef-c4e2-9000-7842-7e23-f1c7.ngrok.io/api',
});

export default instance;
