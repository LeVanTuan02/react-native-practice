import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Heading, HStack, Text, Image, VStack, Flex} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {formatCurrency} from '../utils/string';
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({cateId, title, products = []}) => {
  const navigation = useNavigation();

  return (
    <>
      <Box mb={2}>
        <HStack justifyContent={'space-between'} mx={2} mb={2}>
          <Heading size={'md'} textTransform={'uppercase'}>
            {title}
          </Heading>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductByCate', {
                id: cateId,
                title,
              })
            }>
            <HStack alignItems={'center'}>
              <Text marginRight={1}>Xem tất cả</Text>
              <FontAwesome name="angle-right" size={14} />
            </HStack>
          </TouchableOpacity>
        </HStack>

        <Flex direction="row" flexWrap={'wrap'} mx={1}>
          {products.slice(0, 2).map((item, index) => (
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
      </Box>
    </>
  );
};

export default ProductItem;
