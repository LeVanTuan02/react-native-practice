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
import MainScreen from './src/screens/MainScreen';
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

              <Stack.Screen name="Main" component={MainScreen} />

              <Stack.Screen name="Signup" component={SignupScreen} />

              <Stack.Screen name="Signin" component={SigninScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
