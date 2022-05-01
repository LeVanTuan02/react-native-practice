import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import SigninScreen from './auth/SigninScreen';
import HomeScreen from './HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="home" color={color} size={size} />;
          },
          tabBarBadge: 3,
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Signin"
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user" color={color} size={size} />;
          },
        }}
        component={SigninScreen}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
