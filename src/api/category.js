const DB_NAME = 'categories';
import instance from './config';

const getAll = () => {
  const url = `/${DB_NAME}/?_embed=products`;
  return instance.get(url);
};

const get = id => {
  const url = `/${DB_NAME}/${id}`;
  return instance.get(url);
};

export {getAll, get};
