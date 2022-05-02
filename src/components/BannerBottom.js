import {Image} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const BannerBottom = () => {
  return (
    <Image
      alt="Banner Bottom"
      source={{
        uri: 'https://bizweb.sapocdn.net/thumb/grande/100/438/408/themes/858544/assets/link_image_3_1.jpg?1651467730669',
      }}
      height={SCREEN_HEIGHT * 0.75}
      resizeMode={'cover'}
    />
  );
};

export default BannerBottom;
