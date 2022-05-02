import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Heading, HStack, Text, Image, VStack, Flex} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {formatCurrency} from '../utils/string';
import {useNavigation} from '@react-navigation/native';

const products = [
  {
    id: 1,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/tsm5105-tra-8.jpg?v=1650966496000',
    price: 25000,
    name: 'Product A',
  },
  {
    id: 2,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/ao-polo-nam-vai-cafeapm3635-tna-qsm3026-ghi-3-yody-vn.jpg?v=1651042306000',
    price: 58000,
    name: 'Product B',
  },
  {
    id: 3,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/smm4073-tra-3.jpg?v=1641780163000',
    price: 89999,
    name: 'Product C',
  },
  {
    id: 4,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/scm4033-tit-3.jpg?v=1639968196000',
    price: 89999,
    name: 'Product D',
  },
  {
    id: 5,
    image:
      'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/qjm3051-den-3333.jpg?v=1641803029000',
    price: 67000,
    name: 'Product E',
  },
];

const ProductItem = ({title}) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mb={2}>
        <HStack justifyContent={'space-between'} mx={2} mb={2}>
          <Heading size={'md'} textTransform={'uppercase'}>
            {title}
          </Heading>

          <TouchableOpacity>
            <HStack alignItems={'center'}>
              <Text marginRight={1}>Xem tất cả</Text>
              <FontAwesome name="angle-right" size={14} />
            </HStack>
          </TouchableOpacity>
        </HStack>

        <Flex direction="row" flexWrap={'wrap'} mx={1}>
          {products.slice(0, 2).map((item, index) => (
            <Box w={'1/2'} key={index} px={1} mb={2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetail')}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  minH={220}
                  rounded={'lg'}
                  maxHeight={'full'}
                  flex={1}
                  resizeMode={'cover'}
                  alt={`Image ${item.name}`}
                />

                <VStack alignItems={'center'} mt={2}>
                  <Heading size={'sm'} fontWeight={'light'} numberOfLines={1}>
                    {item.name}
                  </Heading>
                  <Text fontWeight={'medium'} fontSize={'md'}>
                    {formatCurrency(item.price)}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default memo(ProductItem);
