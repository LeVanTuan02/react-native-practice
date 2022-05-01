import React, {useState, useEffect} from 'react';
import {
  Button,
  Text,
  Box,
  Heading,
  Input,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
  HStack,
  FormControl,
} from 'native-base';
import {TouchableOpacity, Keyboard, Alert} from 'react-native';
import {signup} from '../../api/authApi';

const SignupScreen = ({navigation}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      setErrors(prev => ({...prev, name: 'Vui lòng nhập họ tên'}));
    } else {
      setErrors(prev => ({...prev, name: ''}));
    }

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

    if (!formData.confirm) {
      isValid = false;
      setErrors(prev => ({
        ...prev,
        confirm: 'Vui lòng nhập mật khẩu xác nhận',
      }));
    } else if (formData.password !== formData.confirm) {
      isValid = false;
      setErrors(prev => ({
        ...prev,
        confirm: 'Mật khẩu xác nhận không chính xác',
      }));
    } else {
      setErrors(prev => ({...prev, confirm: ''}));
    }

    return isValid;
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        tabBarBadge: 5,
      });
    }, 2000);
  }, [navigation]);

  const handleSignup = async () => {
    const isValid = validate();

    if (isValid) {
      try {
        await signup(formData);
        Alert.alert('Thành công', 'Đăng ký tài khoản thành công');
        navigation.navigate('Signin');
      } catch (error) {
        Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại');
        console.log(error);
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
          <Pressable onPress={() => Keyboard.dismiss()}>
            <ScrollView keyboardShouldPersistTaps={'always'}>
              <Heading
                textAlign={'center'}
                textTransform={'uppercase'}
                size={'md'}
                marginBottom={5}
                fontWeight={'medium'}>
                Đăng ký tài khoản
              </Heading>

              <FormControl mb={1} isInvalid={errors.name}>
                <FormControl.Label>Họ tên:</FormControl.Label>
                <Input
                  placeholder="Nhập họ tên"
                  onChangeText={value =>
                    setFormData({...formData, name: value})
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.name}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl mb={1} isInvalid={errors.email}>
                <FormControl.Label>Email:</FormControl.Label>
                <Input
                  placeholder="Nhập email"
                  onChangeText={value =>
                    setFormData({...formData, email: value})
                  }
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
                  onChangeText={value =>
                    setFormData({...formData, password: value})
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl mb={1} isInvalid={errors.confirm}>
                <FormControl.Label>Xác nhận mật khẩu:</FormControl.Label>
                <Input
                  placeholder="Nhập lại mật khẩu"
                  type="password"
                  onChangeText={value =>
                    setFormData({...formData, confirm: value})
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.confirm}
                </FormControl.ErrorMessage>
              </FormControl>

              <Button onPress={handleSignup} marginTop={4}>
                Đăng ký
              </Button>

              <HStack marginTop={4}>
                <Text>Đã có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                  <Text> Đăng nhập ngay</Text>
                </TouchableOpacity>
              </HStack>
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </Box>
    </>
  );
};

export default SignupScreen;
