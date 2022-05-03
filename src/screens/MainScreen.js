import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';
import CartScreen from './cart/CartScreen';
import SearchScreen from './product/SearchScreen';
import ProfileDashboardScreen from './profile/DashboardScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => dispatch(logout())} />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator initialRouteName="MainTab">
      <Tab.Screen
        name="MainTab"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="home" color={color} size={size} />;
          },
          tabBarBadge: 3,
          headerShown: false,
        }}
        component={DrawerNavigation}
      />

      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="search" color={color} size={size} />;
          },
          title: 'Tìm kiếm',
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        component={SearchScreen}
      />

      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <FontAwesome name="shopping-cart" color={color} size={size} />
            );
          },
          headerTitleAlign: 'center',
          title: 'Giỏ Hàng Của Tôi',
          tabBarLabel: 'Giỏ hàng',
        }}
        component={CartScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user" color={color} size={size} />;
          },
          headerShown: false,
          title: 'Tài khoản',
        }}
        component={ProfileDashboardScreen}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
