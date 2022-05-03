import React from 'react';
import {Box, Heading, HStack, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/authSlice';

const Header = () => {
  const navigation = useNavigation();
  const user = useSelector(selectUser);

  return (
    <Box mx={2} mt={3} mb={1}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <HStack alignItems={'center'}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome name="bars" size={25} color="black" />
          </TouchableOpacity>
          <Heading ml={2} size={'md'} textTransform={'uppercase'}>
            {user.name}
          </Heading>
        </HStack>
        <HStack>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon
              as={FontAwesome}
              name="search"
              size={5}
              color="black"
              mx={2}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon as={FontAwesome} name="bell-o" size={5} color={'black'} />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
