import React from 'react';
import {Box, ScrollView} from 'native-base';
import Banner from '../components/Banner';
import ProductItem from '../components/ProductItem';
import BannerBottom from '../components/BannerBottom';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <Box backgroundColor={'white'} flex={1} safeArea>
      <ScrollView>
        <Header />
        <Banner />

        <ProductItem title="Sản phẩm mới" />
        <ProductItem title="Nam" />
        <ProductItem title="Nữ" />

        <BannerBottom />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
