import React, {useState} from 'react';
import {
  Button,
  Text,
  Box,
  Heading,
  Input,
  KeyboardAvoidingView,
  Pressable,
  HStack,
  FormControl,
} from 'native-base';
import {TouchableOpacity, Keyboard, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {signin} from '../../redux/authSlice';

const SigninScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;

    if (!formData.email) {
      isValid = false;
      setErrors(prev => ({...prev, email: 'Vui lòng nhập email'}));
    } else {
      setErrors(prev => ({...prev, email: ''}));
    }

    if (!formData.password) {
      isValid = false;
      setErrors(prev => ({...prev, password: 'Vui lòng nhập mật khẩu'}));
    } else {
      setErrors(prev => ({...prev, password: ''}));
    }

    return isValid;
  };

  const handleSignin = async () => {
    const isValid = validate();

    if (isValid) {
      try {
        await dispatch(signin(formData)).unwrap();
        Alert.alert('Thành công', 'Đăng nhập thành công');
        setFormData({});
        navigation.navigate('HomeDrawer');
      } catch (error) {
        Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại');
      }
    }
  };

  return (
    <>
      <Box
        safeArea
        padding={3}
        backgroundColor={'white'}
        flex={1}
        justifyContent={'center'}>
        <KeyboardAvoidingView flex={1} justifyContent={'center'}>
          <Pressable
            flex={1}
            justifyContent={'center'}
            onPress={() => Keyboard.dismiss()}>
            <Heading
              textAlign={'center'}
              textTransform={'uppercase'}
              size={'md'}
              marginBottom={5}
              fontWeight={'medium'}>
              Đăng nhập tài khoản
            </Heading>

            <FormControl mb={1} isInvalid={errors.email}>
              <FormControl.Label>Email:</FormControl.Label>
              <Input
                placeholder="Nhập email"
                value={formData.email}
                onChangeText={value => setFormData({...formData, email: value})}
              />
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl mb={1} isInvalid={errors.password}>
              <FormControl.Label>Mật khẩu:</FormControl.Label>
              <Input
                placeholder="Nhập mật khẩu"
                type="password"
                value={formData.password}
                onChangeText={value =>
                  setFormData({...formData, password: value})
                }
              />
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button onPress={handleSignin} marginTop={4}>
              Đăng nhập
            </Button>

            <HStack marginTop={4}>
              <Text>Chưa có tài khoản?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text> Đăng ký</Text>
              </TouchableOpacity>
            </HStack>
          </Pressable>
        </KeyboardAvoidingView>
      </Box>
    </>
  );
};

export default SigninScreen;
