import {Box, FlatList, Heading, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import {formatCurrency} from '../utils/string';

const products = [
  {
    id: 1,
    name: 'Product A',
    quantity: 10,
    price: 10000,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/apm3013-trk-qsm3000-bed-1.jpg?v=1635569433000',
  },
  {
    id: 2,
    name: 'Product B',
    quantity: 8,
    price: 85222,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/apm3295-trt-2.jpg?v=1648197956000',
  },
  {
    id: 3,
    name: 'Product C',
    quantity: 9,
    price: 89999,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/ao-polo-nam-vai-cafeapm3635-tna-qsm3026-ghi-3-yody-vn.jpg?v=1651042306000',
  },
  {
    id: 4,
    name: 'Product D',
    quantity: 9,
    price: 76666,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/ao-polo-nam-vai-cafeapm3635-tna-qsm3026-ghi-3-yody-vn.jpg?v=1651042306000',
  },
  {
    id: 5,
    name: 'Product D',
    quantity: 9,
    price: 76666,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/ao-polo-nam-vai-cafeapm3635-tna-qsm3026-ghi-3-yody-vn.jpg?v=1651042306000',
  },
];

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResult = () => {
  const renderItem = ({item}) => {
    return (
      <HStack>
        <Image
          width={SCREEN_WIDTH * 0.25}
          height={150}
          alt={`Image ${item.name}`}
          source={{uri: item.image}}
        />

        <VStack justifyContent={'center'} ml={2}>
          <Heading size={'sm'}>{item.name}</Heading>
          <Text fontSize={'md'} fontWeight={'bold'}>
            {formatCurrency(item.price)}
          </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <Box flex={1}>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        _contentContainerStyle={{
          pb: 2,
          px: 2,
        }}
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <Box h={'1px'} my={2} bgColor={'gray.300'} />;
        }}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default SearchResult;
