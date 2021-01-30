import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/start/StartScreen";
//import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";

import CreatePinScreen from "../screens/main/CreatePinScreen";
import CapturePhotoScreen from "../screens/pin/CapturePhotoScreen";
import EditPhotoScreen from "../screens/pin/EditPhotoScreen";

import { AsyncStorage } from "react-native";

import  BottomTabNavigator  from "./BottomTabNavigator";

const RootStack = createStackNavigator();
//https://reactnavigation.org/docs/auth-flow/
const MainNavigator = ({}) => {
  return (
    <RootStack.Navigator>
      {AsyncStorage.getItem("auth_token") === null ? (
        // If not logged in, the user will be shown this route
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        // When logged in, the user will be shown this route
        <RootStack.Screen name="pinpix" component={BottomTabNavigator}  options={{ headerShown: false }}/>
      )}
    </RootStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthNavigator = ({}) => {
  return (
    <AuthStack.Navigator>
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

const PinStack = createStackNavigator();
const CreatePinNavigator = ({}) => {
  return (
    <PinStack.Navigator>
      <PinStack.Screen name="Capture" component={CapturePhotoScreen} />
      <PinStack.Screen name="EditPhoto" component={EditPhotoScreen} />
    </PinStack.Navigator>
  );
};

export default MainNavigator;
