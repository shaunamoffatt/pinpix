import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
      View,
      Text,
 } from 'react-native';

import StartScreen from "../screens/start/StartScreen";
import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";
import HomeScreen from "../screens/home/HomeScreen";

const StartNavigator = createStackNavigator({
    //Splash:  SplashScreen,
    Start : StartScreen,
    Login : LoginScreen,
    Register : RegisterScreen,
    Home : HomeScreen
});

export default createAppContainer(StartNavigator);