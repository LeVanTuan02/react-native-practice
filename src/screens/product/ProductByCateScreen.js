import React, {useEffect, useState} from 'react';
import {
  Text,
  Box,
  ScrollView,
  HStack,
  Icon,
  Flex,
  Image,
  Heading,
  VStack,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {formatCurrency} from '../../utils/string';
import {get} from '../../api/category';
import {getAll} from '../../api/product';

const ProductByCateScreen = ({navigation, route}) => {
  const [products, setProducts] = useState([]);
  const {id, title} = route.params;

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await get(id);
      setProducts(data.products);
    };

    const getAllProduct = async () => {
      const {data} = await getAll();
      setProducts(data);
    };

    id ? getProduct() : getAllProduct();
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  return (
    <Box flex={1} bgColor={'white'}>
      <HStack
        justifyContent={'space-between'}
        alignItems={'center'}
        mx={2}
        my={3}>
        <Text fontSize={'md'} fontWeight={'medium'}>
          {products.length} Sản phẩm
        </Text>

        <TouchableOpacity>
          <Icon as={AntDesign} name="filter" size={'lg'} color={'black'} />
        </TouchableOpacity>
      </HStack>

      <ScrollView>
        <Flex direction="row" flexWrap={'wrap'} mx={1}>
          {products.map((item, index) => (
            <Box w={'1/2'} key={index} px={1} mb={2}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    id: item._id,
                  })
                }>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  minH={220}
                  rounded={'lg'}
                  maxHeight={'full'}
                  flex={1}
                  resizeMode={'cover'}
                  alt={`Image ${item.name}`}
                />

                <VStack alignItems={'center'} mt={2}>
                  <Heading size={'sm'} fontWeight={'light'} numberOfLines={1}>
                    {item.name}
                  </Heading>
                  <Text fontWeight={'medium'} fontSize={'md'}>
                    {formatCurrency(item.price)}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
          ))}
        </Flex>
      </ScrollView>
    </Box>
  );
};

export default ProductByCateScreen;
