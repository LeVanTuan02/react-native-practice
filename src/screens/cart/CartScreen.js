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
import {useDispatch, useSelector} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  selectCart,
  selectTotalPrice,
} from '../../redux/cartSlice';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const cartList = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <>
      <Box flex={1} bgColor={'white'}>
        <ScrollView>
          {cartList.map((item, index) => (
            <Box key={index} px={2}>
              <HStack
                borderBottomColor={'gray.300'}
                py={2}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderBottomWidth={1}>
                <HStack flex={1}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    width={SCREEN_WIDTH * 0.3}
                    height={150}
                    alt={`Image ${item.id}`}
                  />

                  <VStack justifyContent={'center'} pl={2} pr={8} flex={1}>
                    <Heading size={'sm'} numberOfLines={2}>
                      {item.name}
                    </Heading>
                    <Text fontSize={'md'} fontWeight={'bold'}>
                      {formatCurrency(item.price)}
                    </Text>
                  </VStack>
                </HStack>

                <HStack alignItems={'center'}>
                  <TouchableOpacity
                    onPress={() => dispatch(decreaseQuantity(item.cartId))}>
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
                  <TouchableOpacity
                    onPress={() => dispatch(increaseQuantity(item.cartId))}>
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
                {cartList.length}
              </Text>
              <Text fontSize={'lg'} ml={1}>
                sản phẩm
              </Text>
            </HStack>

            <Text fontSize={'lg'}>Tạm tính</Text>

            <Text fontSize={'lg'} fontWeight={'bold'}>
              {formatCurrency(totalPrice)}
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
