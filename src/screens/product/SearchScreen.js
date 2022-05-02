import React, {useState} from 'react';
import {Box} from 'native-base';
import SearchForm from '../../components/SearchBar';
import SearchResult from '../../components/SearchResult';

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    console.log(keyword);
  };

  return (
    <Box flex={1} bgColor={'white'}>
      <SearchForm
        onChange={value => setKeyword(value)}
        onSubmit={handleSearch}
      />

      <SearchResult />
    </Box>
  );
};

export default SearchScreen;
