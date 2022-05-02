import {Box, Icon, Input} from 'native-base';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchForm = ({onChange, onSubmit}) => {
  return (
    <Box mx={2} my={2}>
      <Input
        placeholder="Nhập tên sản phẩm"
        variant={'filled'}
        borderColor={'gray.300'}
        onChangeText={onChange}
        onEndEditing={onSubmit}
        InputLeftElement={
          <Icon as={FontAwesome} ml={3} name="search" size={'md'} />
        }
      />
    </Box>
  );
};

export default SearchForm;
