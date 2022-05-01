import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://4b4a-2402-800-61ef-c4e2-488f-c21e-d3be-8633.ngrok.io/api',
});

export default instance;
