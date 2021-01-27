import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StartScreen from "../screens/start/StartScreen";
//import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";

import HomeScreen from "../screens/main/HomeScreen";

import CreatePinScreen from "../screens/main/CreatePinScreen";
import CapturePhotoScreen from "../screens/pin/CapturePhotoScreen";
import EditPhotoScreen from "../screens/pin/EditPhotoScreen";

import Colors from "../constants/Colors";

// Define multiple groups of screens in objects like this
const commonScreens = {

};

const authScreens = {
  Start: StartScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
};

const mainScreens = {
  Home: HomeScreen,
  CreatePin: CreatePinScreen,
};

const Stack = createStackNavigator();

const MainNavigator = ({}) => {
  
  return (
    <Stack.Navigator>
      {Object.entries({
        ... authScreens
        // Use the screens normally
        //...mainScreens,
        // Use some screens conditionally based on some condition
       // ...(isLoggedIn ? userScreens : authScreens),
      }).map(([name, component]) => (
        <Stack.Screen name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();

const MainStackNavigator = ({}) => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="HomeScreen" component={HomeScreen} />
    </BottomTabs.Navigator>
  );
};

const CreatePinNavigator = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capture" component={CapturePhotoScreen} />
      <Stack.Screen name="EditPhoto" component={EditPhotoScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
