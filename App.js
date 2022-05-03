/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistor, {store} from './src/redux/store';
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import CheckoutScreen from './src/screens/cart/CheckoutScreen';
import MainScreen from './src/screens/MainScreen';
import MyCartScreen from './src/screens/product/MyCartScreen';
import ProductByCateScreen from './src/screens/product/ProductByCateScreen';
import ProductDetailScreen from './src/screens/product/ProductDetailScreen';
import SearchScreen from './src/screens/product/SearchScreen';
import CartDetailScreen from './src/screens/profile/CartDetailScreen';
import UpdateProfileScreen from './src/screens/profile/UpdateProfileScreen';
import StartScreen from './src/screens/StartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
              <Stack.Screen
                name="Start"
                options={{
                  headerShown: false,
                }}
                component={StartScreen}
              />

              <Stack.Screen
                name="Main"
                options={{headerShown: false}}
                component={MainScreen}
              />

              <Stack.Screen
                name="Signup"
                options={{headerShown: false}}
                component={SignupScreen}
              />

              <Stack.Screen
                name="Signin"
                options={{headerShown: false}}
                component={SigninScreen}
              />

              <Stack.Screen
                name="ProductDetail"
                options={{
                  title: 'Chi tiết sản phẩm',
                }}
                component={ProductDetailScreen}
              />

              <Stack.Screen name="StackSearch" component={SearchScreen} />

              <Stack.Screen
                name="Checkout"
                options={{title: 'Thanh toán'}}
                component={CheckoutScreen}
              />

              <Stack.Screen
                name="ProductByCate"
                component={ProductByCateScreen}
              />

              <Stack.Screen
                name="UpdateProfile"
                options={{
                  title: 'Cập nhật tài khoản',
                }}
                component={UpdateProfileScreen}
              />

              <Stack.Screen
                name="MyCart"
                options={{title: 'Đơn hàng của tôi'}}
                component={MyCartScreen}
              />

              <Stack.Screen
                name="CartDetail"
                options={{
                  title: 'Chi tiết đơn hàng',
                }}
                component={CartDetailScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
