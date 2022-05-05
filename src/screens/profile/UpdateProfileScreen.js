import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Box,
  Image,
  HStack,
  FormControl,
  Input,
  ScrollView,
  KeyboardAvoidingView,
  VStack,
} from 'native-base';
import {
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/authSlice';
import {Modalize} from 'react-native-modalize';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const UpdateProfileScreen = ({navigation}) => {
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [modalName, setModalName] = useState('');

  const modalizeRef = useRef();

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

  const handleTakePhoto = async () => {
    handleCloseModal();
    const result = await launchCamera({
      mediaType: 'photo',
    });

    if (!result.didCancel) {
      const [file] = result.assets;

      const field = modalName === 'avatar' ? 'avatar' : 'cover';
      setFormData(prev => ({
        ...prev,
        [`${field}Preview`]: file.uri,
        [field]: file,
      }));
    }
  };

  const handleChooseImage = async () => {
    handleCloseModal();

    const result = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (!result.didCancel) {
      const [file] = result.assets;

      const field = modalName === 'avatar' ? 'avatar' : 'cover';
      setFormData(prev => ({
        ...prev,
        [`${field}Preview`]: file.uri,
        [field]: file,
      }));
    }
  };

  const handleUpdate = async () => {
    const isValid = validate();

    if (isValid) {
      console.log(formData);
      Alert.alert('Thành công', 'Cập nhật thành công');
    }
  };

  const handleOpenModal = modal => {
    setModalName(modal);
    modalizeRef.current.open();
  };

  const handleCloseModal = () => {
    modalizeRef.current.close();
  };

  useEffect(() => {
    setFormData(user);
  }, [user]);

  return (
    <Box flex={1} safeArea bgColor={'white'}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box>
              <Box>
                <TouchableOpacity onPress={() => handleOpenModal('cover')}>
                  <Image
                    alt="Banner"
                    source={{uri: formData.coverPreview || user.cover}}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT * 0.25}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('avatar')}>
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
                      source={{uri: formData.avatarPreview || user.avatar}}
                      w={120}
                      h={120}
                      borderWidth={3}
                      borderColor={'white'}
                    />
                  </Box>
                </TouchableOpacity>
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

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        closeOnOverlayTap={true}>
        <Box minH={120} px={2} py={5}>
          <VStack space={3} alignItems={'center'}>
            <Button width={'5/6'} onPress={handleTakePhoto}>
              Take a photo
            </Button>
            <Button width={'5/6'} onPress={handleChooseImage}>
              Choose from library
            </Button>
            <Button
              width={'5/6'}
              colorScheme={'red'}
              onPress={handleCloseModal}>
              Cancel
            </Button>
          </VStack>
        </Box>
      </Modalize>
    </Box>
  );
};

export default UpdateProfileScreen;
