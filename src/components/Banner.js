import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Box, Image} from 'native-base';
import {Dimensions} from 'react-native';

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
    <Box mx={2} mt={2} mb={4} borderRadius={10}>
      <Carousel
        data={images}
        sliderWidth={SCREEN_WIDTH - 16}
        itemWidth={SCREEN_WIDTH - 16}
        loop={true}
        autoplay={true}
        autoplayDelay={2000}
        inactiveSlideScale={1}
        renderItem={({item}) => {
          return (
            <Image
              borderRadius={10}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT * 0.25}
              source={{uri: item.url}}
              alt={`Image ${item.id}`}
            />
          );
        }}
      />
    </Box>
  );
};

export default Banner;
