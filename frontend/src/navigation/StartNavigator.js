import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { View, Text, Platform } from "react-native";

import StartScreen from "../screens/start/StartScreen";
import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";
import HomeScreen from "../screens/main/HomeScreen";
import Colors from "../constants/Colors";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
     Start: StartScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  }),
  mainFlow: createBottomTabNavigator({

  })

});

const StartNavigator = createStackNavigator(
  {
    //Splash:  SplashScreen,
    Start: StartScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.navy,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(StartNavigator);
