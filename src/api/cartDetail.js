import instance from './config';
const DB_NAME = 'cartDetail';

const add = cartDetail => {
  const url = `/${DB_NAME}`;
  return instance.post(url, cartDetail);
};

const get = cartId => {
  const url = `/${DB_NAME}/${cartId}`;
  return instance.get(url);
};

export {add, get};
