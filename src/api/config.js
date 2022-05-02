import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://f01b-2402-800-61ef-c4e2-d922-4f03-74d6-310f.ngrok.io/api',
});

export default instance;
