import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import HomeScreen from './src/screens/HomeScreen';
import MessageScreen from './src/screens/MessageScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import PostScreen from './src/screens/PostScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA2WxGjpbyNppu1YW_7ba4Ectg8XdLLQQE",
    authDomain: "socialapp-4fed7.firebaseapp.com",
    databaseURL: "https://socialapp-4fed7.firebaseio.com",
    projectId: "socialapp-4fed7",
    storageBucket: "socialapp-4fed7.appspot.com",
    messagingSenderId: "799328105935",
    appId: "1:799328105935:web:ec3662de790c69fce94eba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const AppContainer = createStackNavigator(
    {
      default: createBottomTabNavigator(
      {
          Home: {
              screen: HomeScreen,
              navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                  <Icon name="ios-home" size={24}
                  color={tintColor} />
              }
          },

          Message: {
              screen: MessageScreen,
              navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                  <Icon name="ios-chatboxes" size={24}
                  color={tintColor} />
              }
          },

          Post: {
              screen: PostScreen,
              navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                  <Icon name="ios-add-circle" size={52}
                  color="#e9446a"
                  style={{ 
                    shadowColor: '#e9446a', 
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 10,
                    shadowOpacity: 0.3 }} />
              }
          },

          Notification: {
              screen: NotificationScreen,
              navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                  <Icon name="ios-notifications" size={24}
                  color={tintColor} />
              }
          },

          Profile: {
              screen: ProfileScreen,
              navigationOptions: {
                  tabBarIcon: ({ tintColor }) => 
                  <Icon name="ios-person" size={24}
                  color={tintColor} />
              }
          }
      },
      {
        defaultNavigationOptions: {
            tabBarOnPress: ({ navigation, defaultHandler}) => {
                if (navigation.state.key === 'Post') {
                    navigation.navigate('postModal')
                } else {
                    defaultHandler()
                }
            }
        },
          tabBarOptions: {
              activeTintColor: '#161f3d',
              inactiveTintColor: '#b8b8c4',
              showLabel: false,
          }
      }
    ),
    postModal: {
        screen: PostScreen
    }
},  {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: 'postModal'
    }
);

  const AuthStack = createStackNavigator({
      Login: LoginScreen,
      Register: RegisterScreen
  });

  export default createAppContainer(
      createSwitchNavigator({
          Loading: LoadingScreen,
          App: AppContainer,
          Auth: AuthStack
      },{
          initialRouteName: "Loading"
      })
  )