import {useNavigation} from '@react-navigation/native';
import {Box, FlatList, Heading, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {formatCurrency} from '../utils/string';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResult = ({products}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            id: item._id,
          })
        }>
        <HStack>
          <Image
            width={SCREEN_WIDTH * 0.25}
            height={120}
            alt={`Image ${item.name}`}
            source={{uri: item.image}}
          />

          <VStack justifyContent={'center'} ml={2} flex={1}>
            <Heading size={'sm'}>{item.name}</Heading>
            <Text fontSize={'md'} fontWeight={'bold'}>
              {formatCurrency(item.price)}
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <Box flex={1}>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        _contentContainerStyle={{
          pb: 2,
          px: 2,
        }}
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <Box h={'1px'} my={2} bgColor={'gray.300'} />;
        }}
        keyExtractor={item => item._id}
      />
    </Box>
  );
};

export default SearchResult;
