import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/start/StartScreen";
import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";

import HomeScreen from "../screens/main/HomeScreen";

import CreatePinScreen from "../screens/main/CreatePinScreen";
import CapturePhotoScreen from "../screens/pin/CapturePhotoScreen";
import EditPhotoScreen from "../screens/pin/EditPhotoScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const CreatePinNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Capture" component={CapturePhotoScreen} />
      <Stack.Screen name="EditPhoto" component={EditPhotoScreen} />
    </Stack.Navigator>
  );
};

export { AuthNavigator, MainStackNavigator, CreatePinNavigator };
