import React from 'react';
import {
  Text,
  Box,
  ScrollView,
  HStack,
  Icon,
  Flex,
  Image,
  Heading,
  VStack,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {formatCurrency} from '../../utils/string';

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

const ProductByCateScreen = ({navigation}) => {
  return (
    <Box flex={1} bgColor={'white'}>
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        mx={2}
        my={3}>
        <Text fontSize={'md'} fontWeight={'medium'}>
          7 Sản phẩm
        </Text>

        <TouchableOpacity>
          <Icon as={AntDesign} name="filter" size={'lg'} color={'black'} />
        </TouchableOpacity>
      </HStack>

      <ScrollView>
        <Flex direction="row" flexWrap={'wrap'} mx={1}>
          {products.map((item, index) => (
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
      </ScrollView>
    </Box>
  );
};

export default ProductByCateScreen;
