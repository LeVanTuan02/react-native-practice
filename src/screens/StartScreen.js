import React, {useEffect} from 'react';
import {Center} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {selectIsLogged} from '../redux/authSlice';

const StartScreen = ({navigation}) => {
  const isLogged = useSelector(selectIsLogged);

  useEffect(() => {
    if (isLogged) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Signin');
    }
  }, [isLogged, navigation]);

  return (
    <>
      <Center backgroundColor={'#fff'} flex={1}>
        <ActivityIndicator size={25} />
      </Center>
    </>
  );
};

export default StartScreen;
