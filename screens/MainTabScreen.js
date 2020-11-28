import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './InvestasiSekarang';
import NotificationScreenSelesai from './InvestasiSelesai';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import AmbilKeuntungan from './AmbilKeuntungan';
import Vestpay from './Vestpay';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const NotificationStackSelesai = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Petani"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Petani',
        tabBarColor: '#255004',
        tabBarIcon: ({color="#9F9F9F"}) => (
          <MaterialCommunityIcons name="shovel" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Investasi1"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Sekarang',
        tabBarColor: '#255004',
        tabBarIcon: ({color="#9F9F9F"}) => (
          <MaterialCommunityIcons name="cash" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Investasi2"
      component={NotificationStackScreenSelesai}
      options={{
        tabBarLabel: 'Selesai',
        tabBarColor: '#255004',
        tabBarIcon: ({color="#9F9F9F"}) => (
          <MaterialCommunityIcons name="cash-multiple" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profil',
        tabBarColor: '#255004',
        tabBarIcon: ({color="#9F9F9F"}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Petani',

          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
    </HomeStack.Navigator>
  );
};



const NotificationStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <NotificationStack.Screen
        name="Investasi Sekarang"
        component={NotificationScreen}
        options={{

        }}
      />
  </NotificationStack.Navigator>
  );
};

const NotificationStackScreenSelesai = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <NotificationStackSelesai.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <NotificationStackSelesai.Screen
        name="Investasi Selesai"
        component={NotificationScreenSelesai}
        options={{

        }}
      />
      <NotificationStackSelesai.Screen
        name="AmbilKeuntungan"
        component={AmbilKeuntungan}
        options={{
          title: 'Ambil Keuntungan',
        }}

      />
  </NotificationStackSelesai.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
      <ProfileStack.Screen
        name="Vestpay"
        options={{
          title: 'Vestpay',
        }}
        component={Vestpay}
      />
    </ProfileStack.Navigator>
  );
};
