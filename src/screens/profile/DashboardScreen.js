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

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const cover =
  'https://scontent.fhan16-1.fna.fbcdn.net/v/t39.30808-6/236286011_1457962851249533_6303255341345124771_n.png?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Oz0zP6R8XvQAX_GeHll&_nc_ht=scontent.fhan16-1.fna&oh=00_AT8jRzjC7kCeieeosRyLewijMO6V84SgxyYyP4gGQKd7Ag&oe=6276472E';
const avatar =
  'https://scontent.fhan16-1.fna.fbcdn.net/v/t1.6435-9/151005635_1337358523309967_1701712585753219712_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w1I5E2u2q5oAX-8XwYO&_nc_ht=scontent.fhan16-1.fna&oh=00_AT_ZgZ5M4nzNO77l81urNTzXyvMwFX6LG5PWrMvAPOc_9w&oe=6297161B';

const ProfileDashboardScreen = ({navigation}) => {
  return (
    <Box flex={1} bgColor={'white'}>
      <Box>
        <Image
          alt="Banner"
          source={{uri: cover}}
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
              source={{uri: avatar}}
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
                        Lê Văn Tuân
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
          <TouchableOpacity>
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

      <Button shadow={'1'} colorScheme={'red'} mt={3} mx={2}>
        ĐĂNG XUẤT
      </Button>
    </Box>
  );
};

export default ProfileDashboardScreen;
