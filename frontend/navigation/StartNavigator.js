import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
      View,
      Text,
 } from 'react-native';

import StartScreen from "../screens/start/StartScreen";
import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import SignUpScreen from "../screens/start/SignUpScreen";

const StartNavigator = createStackNavigator({
    //Splash:  SplashScreen,
    Start : StartScreen,
    Login : LoginScreen,
    SignUp : SignUpScreen
});

export default createAppContainer(StartNavigator);