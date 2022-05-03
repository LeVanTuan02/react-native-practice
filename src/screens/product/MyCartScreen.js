import {Box, Divider, FlatList, HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getByUser} from '../../api/cart';
import {selectUser} from '../../redux/authSlice';

const renderStatus = status => {
  if (status === 0) {
    return <Text color={'lightBlue.600'}>Đơn hàng mới</Text>;
  }
};

const MyCartScreen = ({navigation}) => {
  const userInfo = useSelector(selectUser);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const {data} = await getByUser(userInfo._id);
      setCartData(data);
    };
    getCart();
  }, [userInfo._id]);

  return (
    <Box flex={1} bgColor={'white'} safeArea>
      <FlatList
        data={cartData}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          marginHorizontal: 8,
        }}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CartDetail', {
                  cartId: item._id,
                  totalPrice: item.amount,
                })
              }>
              <HStack
                mx={2}
                py={2}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <VStack>
                  <Text fontWeight={'bold'} fontSize={'md'}>
                    {item.name}
                  </Text>
                  <Text>{item.phone}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.address}</Text>
                </VStack>

                <Box>{renderStatus(item.status)}</Box>
              </HStack>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Box>
  );
};

export default MyCartScreen;
