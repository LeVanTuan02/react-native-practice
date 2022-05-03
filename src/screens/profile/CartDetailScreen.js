import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  VStack,
  Text,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, Alert} from 'react-native';
import {get} from '../../api/cartDetail';
import {formatCurrency} from '../../utils/string';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CartDetailScreen = ({route}) => {
  const {cartId, totalPrice} = route.params;
  const [cartDetail, setCartDetail] = useState([]);

  useEffect(() => {
    const getCartDetail = async () => {
      const {data} = await get(cartId);
      setCartDetail(data);
    };
    getCartDetail();
  }, [cartId]);

  const handleCancelCart = () => {
    Alert.alert('Hủy đơn hàng', 'Bạn có chắc chắn muốn hủy đơn hàng không?', [
      {
        text: 'Hủy ĐH',
        onPress: () => Alert.alert('Thành công', 'Đơn hàng đã bị hủy'),
      },
      {
        text: 'Hủy',
        style: 'cancel',
      },
    ]);
  };

  return (
    <>
      <Box flex={1} bgColor={'white'}>
        <ScrollView>
          {cartDetail?.map((item, index) => (
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
                      uri: item.productImage,
                    }}
                    width={SCREEN_WIDTH * 0.3}
                    height={150}
                    alt={`Image ${item.id}`}
                  />

                  <VStack justifyContent={'center'} ml={2} flex={1}>
                    <Heading size={'sm'} numberOfLines={2}>
                      {item.productName}
                    </Heading>
                    <Text fontSize={'md'} fontWeight={'bold'}>
                      {formatCurrency(item.productPrice || 0)}
                    </Text>
                    <Text>Số lượng: {item.quantity}</Text>
                  </VStack>
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
                {cartDetail.length}
              </Text>
              <Text fontSize={'lg'} ml={1}>
                sản phẩm
              </Text>
            </HStack>

            <Text fontSize={'lg'}>Tổng tiền</Text>

            <Text fontSize={'lg'} fontWeight={'bold'}>
              {formatCurrency(totalPrice)}
            </Text>
          </HStack>

          <Button
            shadow={'1'}
            mx={2}
            mb={4}
            colorScheme={'red'}
            onPress={handleCancelCart}>
            HỦY ĐƠN HÀNG
          </Button>
        </ScrollView>
      </Box>
    </>
  );
};

export default CartDetailScreen;
