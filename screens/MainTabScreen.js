import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import HomeScreen2 from './HomeScreen2';
import NotificationScreen from './NotificationScreen';
import NotificationScreenSelesai from './NotificationScreenSelesai';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import AmbilKeuntungan from './AmbilKeuntungan';
import Vestpay from './Vestpay';

const HomeStack = createStackNavigator();
const HomeStack2 = createStackNavigator();
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
    {/* <Tab.Screen
      name="Pengepul"
      component={HomeStackScreen2}
      options={{
        tabBarLabel: 'Pengepul',
        tabBarColor: '#255004',
        tabBarIcon: ({color="#9F9F9F"}) => (
          <MaterialCommunityIcons name="home-account" color={color} size={26} />
        ),
      }}
    /> */}
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
          // headerLeft: () => (
          //   <View style={{marginLeft: 10}}>
          //     <Icon.Button
          //       name="ios-menu"
          //       size={25}
          //       color={colors.text}
          //       backgroundColor={colors.background}
          //       onPress={() => navigation.openDrawer()}
          //     />
          //   </View>
          // ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              {/* <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity> */}
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

// const HomeStackScreen2 = ({navigation}) => {
//   const {colors} = useTheme();
//   return (
//     <HomeStack2.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <HomeStack2.Screen
//         name="Home"
//         component={HomeScreen2}
//         options={{
//           title: 'Pengepul',
//           // headerLeft: () => (
//           //   <View style={{marginLeft: 10}}>
//           //     <Icon.Button
//           //       name="ios-menu"
//           //       size={25}
//           //       color={colors.text}
//           //       backgroundColor={colors.background}
//           //       onPress={() => navigation.openDrawer()}
//           //     />
//           //   </View>
//           // ),
//           headerRight: () => (
//             <View style={{flexDirection: 'row', marginRight: 10}}>
//               <Icon.Button
//                 name="ios-search"
//                 size={25}
//                 color={colors.text}
//                 backgroundColor={colors.background}
//                 onPress={() => {}}
//               />
//               {/* <TouchableOpacity
//                 style={{paddingHorizontal: 10, marginTop: 5}}
//                 onPress={() => {
//                   navigation.navigate('Profile');
//                 }}>
//                 <Avatar.Image
//                   source={{
//                     uri:
//                       'https://api.adorable.io/avatars/80/abott@adorable.png',
//                   }}
//                   size={30}
//                 />
//               </TouchableOpacity> */}
//             </View>
//           ),
//         }}
//       />
//       <HomeStack2.Screen 
//         name="CardListScreen"
//         component={CardListScreen}
//         options={({route}) => ({
//           title: route.params.title,
//           headerBackTitleVisible: false
//         })}
//       />
//       <HomeStack2.Screen 
//         name="CardItemDetails"
//         component={CardItemDetails}
//         options={({route}) => ({
//           // title: route.params.title,
//           headerBackTitleVisible: false,
//           headerTitle: false,
//           headerTransparent: true,
//           headerTintColor: '#fff'
//         })}
//       />
//     </HomeStack2.Navigator>
//   );
// };

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
          // headerLeft: () => (
          //   <View style={{marginLeft: 10}}>
          //     <Icon.Button
          //       name="ios-menu"
          //       size={25}
          //       backgroundColor={colors.background}
          //       color={colors.text}
          //       onPress={() => navigation.openDrawer()}
          //     />
          //   </View>
          // ),
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
          // headerLeft: () => (
          //   <View style={{marginLeft: 10}}>
          //     <Icon.Button
          //       name="ios-menu"
          //       size={25}
          //       backgroundColor={colors.background}
          //       color={colors.text}
          //       onPress={() => navigation.openDrawer()}
          //     />
          //   </View>
          // ),
        }}
      />
      <NotificationStackSelesai.Screen
        name="AmbilKeuntungan"
        component={AmbilKeuntungan}
        options={{
          title: 'Ambil Keuntungan',
        }}
        // options={{
        //   // headerLeft: () => (
        //   //   <View style={{marginLeft: 10}}>
        //   //     <Icon.Button
        //   //       name="ios-menu"
        //   //       size={25}
        //   //       backgroundColor={colors.background}
        //   //       color={colors.text}
        //   //       onPress={() => navigation.openDrawer()}
        //   //     />
        //   //   </View>
        //   // ),
        // }}
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
          // headerLeft: () => (
          //   <View style={{marginLeft: 10}}>
          //     <Icon.Button
          //       name="ios-menu"
          //       size={25}
          //       backgroundColor={colors.background}
          //       color={colors.text}
          //       onPress={() => navigation.openDrawer()}
          //     />
          //   </View>
          // ),
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
