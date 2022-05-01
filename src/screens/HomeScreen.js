import React from 'react';
import {Box} from 'native-base';
import Banner from '../components/Banner';

const HomeScreen = () => {
  return (
    <Box backgroundColor={'white'} flex={1} safeArea>
      <Banner />
    </Box>
  );
};

export default HomeScreen;
