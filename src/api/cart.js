import instance from './config';
const DB_NAME = 'cart';

const add = cart => {
  const url = `/${DB_NAME}`;
  return instance.post(url, cart);
};

const getByUser = userId => {
  const url = `/${DB_NAME}/getByUser/${userId}`;
  return instance.get(url);
};

export {add, getByUser};
