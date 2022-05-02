import React, {memo, useEffect, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  Dimensions,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'native-base';
import {formatCurrency} from '../../utils/string';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const images = [
  {
    id: 1,
    url: 'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/tsm5105-tra-8.jpg?v=1650966496000',
  },
  {
    id: 2,
    url: 'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/stm5003-dre-3.jpg?v=1648536762000',
  },
  {
    id: 3,
    url: 'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/tsm5213-bee-4.jpg?v=1648388191000',
  },
  {
    id: 4,
    url: 'https://bizweb.sapocdn.net/thumb/large/100/438/408/products/tsm5149-den-4-jpg-52fbf568-3d07-45b9-a5db-2d36b37804db.jpg?v=1647664041000',
  },
];

const SCREEN_WITH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProductDetailScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState('1');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const renderItem = ({item}) => {
    return (
      <Image
        alt={`Image ${item.id}`}
        source={{uri: item.url}}
        width={SCREEN_WITH}
        height={SCREEN_HEIGHT * 0.6}
      />
    );
  };

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });

    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  const handleAddCart = () => {
    if (isNaN(quantity) || +quantity <= 0) {
      Alert.alert('Có lỗi xảy ra', 'Vui lòng chọn lại số lượng SP');
    } else {
      Alert.alert(
        'Thành công',
        'Đã thêm SP vào giỏ hàng. Bạn có muốn thanh toán không?',
        [
          {
            text: 'Tới giỏ hàng',
            onPress: () => navigation.navigate('Cart'),
          },
          {
            text: 'Ở lại',
            onPress: () => setQuantity('1'),
          },
        ],
      );
    }
  };

  return (
    <Box flex={1} backgroundColor={'white'}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <TouchableWithoutFeedback
          disabled={!isShowKeyboard}
          onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView>
            <Box>
              <Carousel
                data={images}
                sliderWidth={SCREEN_WITH}
                itemWidth={SCREEN_WITH}
                renderItem={renderItem}
                inactiveSlideScale={1}
                loop={true}
                autoplay
                onSnapToItem={index => setActiveIndex(index)}
                loopClonesPerSide={images.length}
              />
              <Pagination
                activeDotIndex={activeIndex}
                dotsLength={images.length}
                containerStyle={styles.paginationContainer}
                inactiveDotScale={1}
                dotStyle={styles.dotStyle}
                dotContainerStyle={styles.dotContainer}
                inactiveDotOpacity={0.3}
              />
            </Box>

            <Heading size="md" mx={2} mt={3}>
              Áo phông trơn
            </Heading>

            <Text fontWeight={'bold'} fontSize={'lg'} mx={2}>
              {formatCurrency(10000)}
            </Text>

            <HStack mx={2} mt={3} alignItems={'center'}>
              <Text mr={2}>Số lượng</Text>

              <HStack>
                <IconButton
                  borderRightRadius={0}
                  bgColor={'gray.300'}
                  _pressed={{
                    bg: 'gray.400',
                  }}
                  onPress={() =>
                    setQuantity(prev => {
                      if (isNaN(prev)) {
                        return '1';
                      }
                      return (--prev).toString();
                    })
                  }
                  icon={
                    <Icon
                      as={FontAwesome}
                      color={'gray.600'}
                      size={4}
                      name="minus"
                    />
                  }
                />
                <Input
                  w={50}
                  borderRadius={0}
                  h={10}
                  textAlign="center"
                  value={quantity}
                  onChangeText={value => setQuantity(value)}
                />

                <IconButton
                  borderLeftRadius={0}
                  bgColor={'gray.300'}
                  _pressed={{
                    bg: 'gray.400',
                  }}
                  onPress={() =>
                    setQuantity(prev => {
                      if (isNaN(prev)) {
                        return 1;
                      }
                      return (+prev + 1).toString();
                    })
                  }
                  icon={
                    <Icon
                      as={FontAwesome}
                      color={'gray.600'}
                      size={4}
                      name="plus"
                    />
                  }
                />
              </HStack>
            </HStack>

            <Button mx={2} my={4} colorScheme={'red'} onPress={handleAddCart}>
              Thêm vào giỏ hàng
            </Button>

            <Box mx={2} mb={2}>
              <Text>Mô tả</Text>
              <Text>- Rất okela</Text>
              <Text>- Chất liệu thoáng mát</Text>
            </Box>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 12,
    marginHorizontal: 'auto',
    width: '100%',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export default memo(ProductDetailScreen);
