import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  VStack,
  Text,
  Icon,
  Button,
} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {formatCurrency} from '../../utils/string';
import Feather from 'react-native-vector-icons/Feather';

const cartData = [
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
];

const SCREEN_WIDTH = Dimensions.get('window').width;

const CartScreen = ({navigation}) => {
  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <>
      <Box flex={1} bgColor={'white'}>
        <ScrollView>
          {cartData.map((item, index) => (
            <Box key={index} px={2}>
              <HStack
                borderBottomColor={'gray.300'}
                py={2}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderBottomWidth={1}>
                <HStack>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    width={SCREEN_WIDTH * 0.3}
                    height={150}
                    alt={`Image ${item.id}`}
                  />

                  <VStack justifyContent={'center'} ml={2}>
                    <Heading size={'sm'}>{item.name}</Heading>
                    <Text fontSize={'md'} fontWeight={'bold'}>
                      {formatCurrency(item.price)}
                    </Text>
                  </VStack>
                </HStack>

                <HStack alignItems={'center'}>
                  <TouchableOpacity>
                    <Icon
                      as={Feather}
                      name="minus-circle"
                      size={'md'}
                      color={'black'}
                    />
                  </TouchableOpacity>
                  <Text color={'black'} mx={1}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity>
                    <Icon
                      as={Feather}
                      name="plus-circle"
                      size={'md'}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </HStack>
              </HStack>
            </Box>
          ))}

          <HStack
            mx={2}
            py={3}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <HStack alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                3
              </Text>
              <Text fontSize={'lg'} ml={1}>
                sản phẩm
              </Text>
            </HStack>

            <Text fontSize={'lg'}>Tạm tính</Text>

            <Text fontSize={'lg'} fontWeight={'bold'}>
              {formatCurrency(15000)}
            </Text>
          </HStack>

          <Button
            shadow={'1'}
            mx={2}
            mb={4}
            colorScheme={'red'}
            onPress={handleCheckout}>
            TIẾN HÀNH ĐẶT HÀNG
          </Button>
        </ScrollView>
      </Box>
    </>
  );
};

export default CartScreen;
