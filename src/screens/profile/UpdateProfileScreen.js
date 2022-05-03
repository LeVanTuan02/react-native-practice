import React, {useState} from 'react';
import {
  Button,
  Box,
  Image,
  HStack,
  FormControl,
  Input,
  ScrollView,
  KeyboardAvoidingView,
} from 'native-base';
import {
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const cover =
  'https://scontent.fhan16-1.fna.fbcdn.net/v/t39.30808-6/236286011_1457962851249533_6303255341345124771_n.png?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Oz0zP6R8XvQAX_GeHll&_nc_ht=scontent.fhan16-1.fna&oh=00_AT8jRzjC7kCeieeosRyLewijMO6V84SgxyYyP4gGQKd7Ag&oe=6276472E';
const avatar =
  'https://scontent.fhan16-1.fna.fbcdn.net/v/t1.6435-9/151005635_1337358523309967_1701712585753219712_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w1I5E2u2q5oAX-8XwYO&_nc_ht=scontent.fhan16-1.fna&oh=00_AT_ZgZ5M4nzNO77l81urNTzXyvMwFX6LG5PWrMvAPOc_9w&oe=6297161B';

const UpdateProfileScreen = ({navigation}) => {
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
        address: 'Vui lòng nhập địa chỉ của bạn',
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

  const handleUpdate = () => {
    const isValid = validate();

    if (isValid) {
      Alert.alert('Thành công', 'Cập nhật thành công');
    }
  };

  return (
    <Box flex={1} safeArea bgColor={'white'}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box>
              <Box>
                <Image
                  alt="Banner"
                  source={{uri: cover}}
                  width={SCREEN_WIDTH}
                  height={SCREEN_HEIGHT * 0.25}
                />

                <Box
                  mx={2}
                  position={'absolute'}
                  bottom={0}
                  right={0}
                  left={SCREEN_WIDTH / 2}
                  style={{
                    transform: [{translateY: 60}, {translateX: -63}],
                  }}>
                  <Image
                    alt="Avatar"
                    rounded={'full'}
                    source={{uri: avatar}}
                    w={120}
                    h={120}
                    borderWidth={3}
                    borderColor={'white'}
                  />
                </Box>
              </Box>

              <Box mx={2} mt={60}>
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
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChangeText={value =>
                      setFormData({...formData, address: value})
                    }
                  />
                  <FormControl.ErrorMessage>
                    {errors.address}
                  </FormControl.ErrorMessage>
                </FormControl>

                <HStack mt={5} space={5} mb={2}>
                  <Button
                    flex={1}
                    shadow={'1'}
                    colorScheme={'red'}
                    onPress={() => navigation.goBack()}>
                    HỦY
                  </Button>
                  <Button
                    flex={1}
                    shadow={'1'}
                    colorScheme={'lightBlue'}
                    onPress={handleUpdate}>
                    THAY ĐỔI
                  </Button>
                </HStack>
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

export default UpdateProfileScreen;
