import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet, Image } from "react-native";

import LocationsScreen from "../screens/profileTab/LocationsScreen";
import AllPinsScreen from "../screens/profileTab/AllPinsScreen";
import HeartedPinsScreen from "../screens/profileTab/HeartedPinsScreen";

import Colors from "../constants/Colors";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

let iconSize = 25;
let bigIconSize = 50;
const ProfileTabNavigator = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: Colors.pink,
        indicatorStyle: {
          borderBottomColor: Colors.navy,
          borderBottomWidth: 2,
        },
        inactiveTintColor: Colors.pink,
      }}
      initialRouteName="Locations "
    >
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarLabel: "Locations",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="location-sharp"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="All"
        component={AllPinsScreen}
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="camera"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="Hearted"
        component={HeartedPinsScreen}
        options={{
          tabBarLabel: "Hearted",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTabNavigator;
