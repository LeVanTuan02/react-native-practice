import React, {useEffect, useState} from 'react';
import {Box} from 'native-base';
import SearchForm from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';
import {getAll, search} from '../../api/product';

const SearchScreen = () => {
  const [products, setProducts] = useState('');

  const handleSearch = async keyword => {
    const {data} = await search(keyword);
    setProducts(data);
  };

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await getAll();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <Box flex={1} bgColor={'white'}>
      <SearchForm onChange={handleSearch} />

      <SearchResult products={products} />
    </Box>
  );
};

export default SearchScreen;
