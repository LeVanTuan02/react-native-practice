import React from 'react';
import {Image, View} from 'native-base';
import {Dimensions, Box} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const images = [
  {
    id: 1,
    url: 'https://reviewedu.net/wp-content/uploads/2021/09/Cao-dang-fpt.jpeg',
  },
  {
    id: 2,
    url: 'https://vtv1.mediacdn.vn/thumb_w/650/2020/8/20/photo1534139475155-15341394751561891087312-1597925109215457201345.jpg',
  },
  {
    id: 3,
    url: 'http://icdn.dantri.com.vn/zoom/1200_630/2020/08/28/tin-nhap-hoc-docx-1598604173087.png',
  },
];

const Banner = () => {
  return (
    <View>
      <Carousel
        data={images}
        autoplay
        loop
        inactiveSlideScale={1}
        renderItem={({item}) => {
          return (
            <Image
              source={{uri: item.url}}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT * 0.25}
              alt={`Banner ${item.id}`}
            />
          );
        }}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        enableSnap={true}
      />
    </View>
  );
};

export default Banner;
