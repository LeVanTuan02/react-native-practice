import React, {useEffect, useState} from 'react';
import {Box, ScrollView} from 'native-base';
import Banner from '../components/Banner';
import ProductItem from '../components/ProductItem';
import BannerBottom from '../components/BannerBottom';
import Header from '../components/Header';
import {getAll} from '../api/category';
import {getAll as getAllProduct} from '../api/product';

const HomeScreen = () => {
  const [products, setProduct] = useState([]);
  const [newProducts, setNewProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {data} = await getAll();
      setProduct(data);

      const {data: newProduct} = await getAllProduct();
      setNewProduct(newProduct);
    };
    getData();
  }, []);

  return (
    <Box backgroundColor={'white'} flex={1} safeArea>
      <ScrollView>
        <Header />
        <Banner />

        <ProductItem title="Sản phẩm mới" products={newProducts} />

        {products?.map((item, index) => {
          return (
            <ProductItem
              key={index}
              title={item.name}
              cateId={item._id}
              products={item.products}
            />
          );
        })}

        <BannerBottom />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
