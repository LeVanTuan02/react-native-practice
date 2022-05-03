import instance from './config';

const DB_NAME = 'products';

const getAll = () => {
  const url = `/${DB_NAME}`;
  return instance.get(url);
};

const get = id => {
  const url = `/${DB_NAME}/${id}`;
  return instance.get(url);
};

const search = keyword => {
  const url = `/${DB_NAME}/search/${keyword}`;
  return instance.post(url);
};

export {getAll, search, get};
