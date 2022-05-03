import React, {useState} from 'react';
import {
  Box,
  HStack,
  Icon,
  Input,
  Text,
  Button,
  Heading,
  FormControl,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import {TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formatCurrency} from '../../utils/string';

const CheckoutScreen = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;

    if (!formData.name) {
      setErrors(prev => ({
        ...prev,
        name: 'Vui lòng nhập họ tên',
      }));
      isValid = false;
    } else {
      setErrors(prev => ({
        ...prev,
        name: '',
      }));
    }

    if (!formData.email) {
      setErrors(prev => ({
        ...prev,
        email: 'Vui lòng nhập email',
      }));
      isValid = false;
    } else {
      setErrors(prev => ({
        ...prev,
        email: '',
      }));
    }

    if (!formData.phone) {
      setErrors(prev => ({
        ...prev,
        phone: 'Vui lòng nhập số điện thoại',
      }));
      isValid = false;
    } else {
      setErrors(prev => ({
        ...prev,
        phone: '',
      }));
    }

    if (!formData.address) {
      setErrors(prev => ({
        ...prev,
        address: 'Vui lòng nhập địa chỉ giao hàng',
      }));
      isValid = false;
    } else {
      setErrors(prev => ({
        ...prev,
        address: '',
      }));
    }

    return isValid;
  };

  const handleCheckout = () => {
    const isValid = validate();

    if (isValid) {
      console.log(formData);
      Alert.alert('Thành công', 'Đặt hàng thành công');
    }
  };

  return (
    <Box flex={1} safeArea bgColor={'white'}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box>
              <Box
                bgColor={'gray.100'}
                py={5}
                px={2}
                borderBottomWidth={0.5}
                borderBottomColor={'gray.400'}>
                <HStack alignItems={'center'} justifyContent={'space-between'}>
                  <HStack alignItems={'center'}>
                    <Icon
                      as={Ionicons}
                      name="cart-outline"
                      color={'indigo.500'}
                      size={'lg'}
                    />
                    <Text fontSize={'md'} ml={2} color={'indigo.500'}>
                      Tổng thanh toán
                    </Text>
                  </HStack>

                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    {formatCurrency(10789)}
                  </Text>
                </HStack>
              </Box>

              <Box
                px={2}
                borderBottomWidth={0.5}
                borderBottomColor={'gray.400'}>
                <HStack my={3}>
                  <Input flex={1} placeholder="Mã giảm giá" />
                  <Button ml={3} colorScheme={'red'}>
                    SỬ DỤNG
                  </Button>
                </HStack>
              </Box>

              <Box px={2} mt={3}>
                <Heading fontSize={'xl'} fontWeight={'medium'}>
                  Thông tin giao hàng
                </Heading>

                <FormControl isInvalid={errors.name} mt={4}>
                  <Input
                    placeholder="Họ và tên"
                    value={formData.name}
                    onChangeText={value =>
                      setFormData({...formData, name: value})
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors.name}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email} mt={4}>
                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={value =>
                      setFormData({...formData, email: value})
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors.email}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phone} mt={4}>
                  <Input
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChangeText={value =>
                      setFormData({...formData, phone: value})
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors.phone}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.address} mt={4}>
                  <Input
                    placeholder="Địa chỉ giao hàng"
                    value={formData.address}
                    onChangeText={value =>
                      setFormData({...formData, address: value})
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors.address}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl mt={4}>
                  <Input
                    placeholder="Ghi chú"
                    value={formData.message}
                    onChangeText={value =>
                      setFormData({...formData, message: value})
                    }
                  />
                </FormControl>

                <Button
                  onPress={handleCheckout}
                  colorScheme={'red'}
                  mt={4}
                  mb={2}>
                  THANH TOÁN
                </Button>
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

export default CheckoutScreen;
