import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import StartScreen from "../screens/start/StartScreen";
//import SplashScreen from "../screens/start/SplashScreen";
import LoginScreen from "../screens/start/LoginScreen";
import RegisterScreen from "../screens/start/RegisterScreen";

import HomeScreen from "../screens/main/HomeScreen";

import ProfileScreen from "../screens/main/ProfileScreen";
import ActivityScreen from "../screens/user/ActivityScreen";

import CreatePinScreen from "../screens/main/CreatePinScreen";
import CapturePhotoScreen from "../screens/pin/CapturePhotoScreen";
import EditPhotoScreen from "../screens/pin/EditPhotoScreen";

import Colors from "../constants/Colors";

import { View, AsyncStorage } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const RootStack = createStackNavigator();

const MainNavigator = ({}) => {
  return (
    <RootStack.Navigator>
      {AsyncStorage.getItem("auth_token") != null ? (
        // If not logged in, the user will be shown this route
        <RootStack.Screen name="Auth" component={AuthNavigator} options={{headerShown:false}}/>
      ) : (
        // When logged in, the user will be shown this route
        <RootStack.Screen name="pinpix" component={TabNavigator} />
      )}
    </RootStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
let iconSize = 22;
const TabNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor={Colors.navy}
      inactiveColor={Colors.greenLight}
      barStyle={{ backgroundColor: "#f2f2f2" }}
    >
      <Tab.Screen
        name="Login"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search-sharp" color={color} size={iconSize} />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="AddPin"
        component={CreatePinScreen}
        options={{
          tabBarLabel: "Add Pin",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                position: "absolute",
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="ios-add-circle"
                color={Colors.pink}
                inactiveColor={Colors.pink}
                activeColor={Colors.navy}
                size={60}
              />
            </View>
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="Heart"
        component={HomeScreen}
        options={{
          tabBarLabel: "Favs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart-sharp" color={color} size={iconSize} />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" color={color} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthNavigator = ({}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Start" component={StartScreen} options={{headerShown:false}}/>
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
