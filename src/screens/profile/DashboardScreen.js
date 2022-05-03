import React from 'react';
import {
  Text,
  Box,
  Image,
  HStack,
  Heading,
  Icon,
  Button,
  VStack,
  Divider,
} from 'native-base';
import {Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {logout, selectUser} from '../../redux/authSlice';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProfileDashboardScreen = ({navigation}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box flex={1} bgColor={'white'}>
      <Box>
        <Image
          alt="Banner"
          source={{uri: user.cover}}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT * 0.25}
        />

        <Box
          mx={2}
          position={'absolute'}
          bottom={0}
          right={0}
          left={0}
          style={{
            transform: [{translateY: 60}],
          }}>
          <HStack>
            <Image
              alt="Avatar"
              rounded={'full'}
              source={{uri: user.avatar}}
              w={120}
              h={120}
              borderColor={'white'}
              borderWidth={3}
            />

            <Box flex={1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateProfile')}>
                <Box mt={16} ml={2}>
                  <HStack
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Box>
                      <Heading fontSize={'xl'} fontWeight={'semibold'}>
                        {user.name}
                      </Heading>
                      <Text color={'gray.500'}>Thông tin chi tiết</Text>
                    </Box>

                    <Icon
                      as={FontAwesome}
                      name="angle-right"
                      color={'gray.500'}
                      size={'md'}
                      mr={3}
                    />
                  </HStack>
                </Box>
              </TouchableOpacity>
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box mx={2} mt={70}>
        <VStack>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <HStack py={2}>
              <Icon as={FontAwesome} name="shopping-cart" size={'lg'} />
              <Text fontSize={'md'} ml={2}>
                Đơn hàng của tôi
              </Text>
            </HStack>
            <Divider />
          </TouchableOpacity>

          <TouchableOpacity>
            <HStack py={2}>
              <Icon as={FontAwesome} name="shopping-cart" size={'lg'} />
              <Text fontSize={'md'} ml={2}>
                Đơn hàng đã giao
              </Text>
            </HStack>
            <Divider />
          </TouchableOpacity>

          <TouchableOpacity>
            <HStack py={2}>
              <Icon as={FontAwesome} name="shopping-cart" size={'lg'} />
              <Text fontSize={'md'} ml={2}>
                Đơn hàng chưa giao
              </Text>
            </HStack>
            <Divider />
          </TouchableOpacity>

          <TouchableOpacity>
            <HStack py={2}>
              <Icon as={FontAwesome} name="shopping-cart" size={'lg'} />
              <Text fontSize={'md'} ml={2}>
                Đơn hàng đang giao
              </Text>
            </HStack>
          </TouchableOpacity>
        </VStack>
      </Box>

      <Button
        shadow={'1'}
        colorScheme={'red'}
        mt={3}
        mx={2}
        onPress={handleLogout}>
        ĐĂNG XUẤT
      </Button>
    </Box>
  );
};

export default ProfileDashboardScreen;
