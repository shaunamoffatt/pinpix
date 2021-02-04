import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet, Image } from "react-native";

import LocationsScreen from "../screens/profileTab/LocationsScreen";
import AllPinsScreen from "../screens/profileTab/AllPinsScreen";
import HeartedPinsScreen from "../screens/profileTab/HeartedPinsScreen";

import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

let iconSize = 20;

const ProfileTabNavigator = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: Colors.pink,
        indicatorStyle: {
          borderBottomColor: Colors.pink,
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
              color={Colors.navy}
              size={iconSize}
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
            <Image
              style={{ width: iconSize, height: iconSize }}
              source={require("../assets/colourwheel.png")}
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
            <Ionicons name="ios-heart" color={Colors.pink} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTabNavigator;
