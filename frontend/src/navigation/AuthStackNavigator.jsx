import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/start/StartScreen";
import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";
import OnBoardingScreen from "../screens/start/OnBoardingScreen";
const AuthStack = createStackNavigator();
const AuthStackNavigator = ({}) => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen
        name="Start1"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
